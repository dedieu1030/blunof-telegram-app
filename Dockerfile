# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install curl for healthcheck
RUN apk add --no-cache curl

# Copy package files first for better caching
COPY package*.json ./
COPY client/package*.json ./client/

# Install only essential dependencies for build
RUN npm ci --omit=dev --ignore-scripts
RUN cd client && npm ci --omit=dev --ignore-scripts

# Copy source code
COPY . .

# Build the client (skip postinstall scripts)
RUN npm run build --ignore-scripts

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Install curl for healthcheck
RUN apk add --no-cache curl

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev --ignore-scripts

# Copy built client from builder stage
COPY --from=builder /app/client/dist ./client/dist

# Copy server code
COPY server ./server

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001/health || exit 1

# Start the server
CMD ["npm", "start"]
