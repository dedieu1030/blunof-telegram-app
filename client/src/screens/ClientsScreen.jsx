import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Users, Mail, Phone } from 'iconoir-react';

const ClientsScreen = () => {
  const clients = [
    { id: 1, name: 'TechCorp Inc', email: 'contact@techcorp.com', phone: '+33 1 23 45 67 89', totalInvoices: 8, totalRevenue: 12500 },
    { id: 2, name: 'Design Studio', email: 'hello@designstudio.fr', phone: '+33 1 98 76 54 32', totalInvoices: 5, totalRevenue: 8900 },
    { id: 3, name: 'Marketing Pro', email: 'info@marketingpro.com', phone: '+33 1 45 67 89 12', totalInvoices: 12, totalRevenue: 18700 }
  ];

  return (
    <motion.div className="min-h-screen bg-neutral-50 px-4 py-6">
      <motion.header className="mb-8">
        <h1 className="text-headline-24 text-neutral-900 mb-2">Clients</h1>
        <p className="text-body-16 text-neutral-600">Gérez votre base de clients</p>
      </motion.header>

      <motion.section className="mb-6">
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input type="text" placeholder="Rechercher un client..." className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl text-body-14 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500/20" />
          </div>
          <button className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center shadow-soft">
            <Filter className="w-5 h-5 text-neutral-600" />
          </button>
        </div>
      </motion.section>

      <motion.div className="mb-6">
        <button className="w-full bg-accent-500 text-white py-4 px-6 rounded-2xl font-medium text-body-16 flex items-center justify-center space-x-2 shadow-medium hover:bg-accent-600 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Nouveau Client</span>
        </button>
      </motion.div>

      <motion.section>
        <h2 className="text-headline-18 text-neutral-900 mb-4">Clients récents</h2>
        <div className="space-y-3">
          {clients.map((client) => (
            <div key={client.id} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-soft rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-body-16 font-medium text-neutral-900">{client.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-body-14 font-semibold text-neutral-900">{client.totalInvoices} factures</p>
                  <p className="text-label-12 text-neutral-500">{client.totalRevenue.toLocaleString()} €</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-neutral-400" />
                  <span className="text-label-12 text-neutral-600">{client.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-neutral-400" />
                  <span className="text-label-12 text-neutral-600">{client.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ClientsScreen;
