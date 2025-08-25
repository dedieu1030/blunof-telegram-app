# Single stage build - optimized for Railway
FROM node:18-alpine

WORKDIR /app

# Install curl for healthcheck
RUN apk add --no-cache curl

# Copy package files
COPY package*.json ./
COPY client/package*.json ./client/

# Install only essential production dependencies
RUN npm ci --omit=dev --ignore-scripts --prefer-offline --no-audit
RUN cd client && npm ci --omit=dev --ignore-scripts --prefer-offline --no-audit

# Copy source code
COPY . .

# Build the client (skip all scripts)
RUN cd client && npx vite build --mode production

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001/health || exit 1

# Start the server
CMD ["npm", "start"]
