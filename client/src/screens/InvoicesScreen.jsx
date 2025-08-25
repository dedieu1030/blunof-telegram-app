import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Invoice, Clock, CheckCircle, AlertTriangle } from 'iconoir-react';

const InvoicesScreen = () => {
  const invoices = [
    { id: 1, number: 'FAC-2024-001', client: 'TechCorp Inc', amount: 2500, status: 'paid', date: '2024-01-15' },
    { id: 2, number: 'FAC-2024-002', client: 'Design Studio', amount: 1800, status: 'pending', date: '2024-01-20' },
    { id: 3, number: 'FAC-2024-003', client: 'Marketing Pro', amount: 3200, status: 'overdue', date: '2024-01-10' }
  ];

  const getStatusInfo = (status) => {
    switch (status) {
      case 'paid': return { icon: CheckCircle, color: 'text-success-600', bgColor: 'bg-success-50', label: 'Payée' };
      case 'pending': return { icon: Clock, color: 'text-warning-600', bgColor: 'bg-warning-50', label: 'En attente' };
      case 'overdue': return { icon: AlertTriangle, color: 'text-error-600', bgColor: 'bg-error-50', label: 'En retard' };
      default: return { icon: Invoice, color: 'text-neutral-600', bgColor: 'bg-neutral-50', label: 'Inconnu' };
    }
  };

  return (
    <motion.div className="min-h-screen bg-neutral-50 px-4 py-6">
      <motion.header className="mb-8">
        <h1 className="text-headline-24 text-neutral-900 mb-2">Factures</h1>
        <p className="text-body-16 text-neutral-600">Gérez vos factures et suivez les paiements</p>
      </motion.header>

      <motion.section className="mb-6">
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input type="text" placeholder="Rechercher une facture..." className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl text-body-14 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500/20" />
          </div>
          <button className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center shadow-soft">
            <Filter className="w-5 h-5 text-neutral-600" />
          </button>
        </div>
      </motion.section>

      <motion.div className="mb-6">
        <button className="w-full bg-accent-500 text-white py-4 px-6 rounded-2xl font-medium text-body-16 flex items-center justify-center space-x-2 shadow-medium hover:bg-accent-600 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Nouvelle Facture</span>
        </button>
      </motion.div>

      <motion.section>
        <h2 className="text-headline-18 text-neutral-900 mb-4">Factures récentes</h2>
        <div className="space-y-3">
          {invoices.map((invoice) => {
            const statusInfo = getStatusInfo(invoice.status);
            const StatusIcon = statusInfo.icon;
            
            return (
              <div key={invoice.id} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-soft rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
                      <Invoice className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <p className="text-body-14 font-medium text-neutral-900">{invoice.number}</p>
                      <p className="text-label-12 text-neutral-600">{invoice.client}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full ${statusInfo.bgColor}`}>
                    <div className="flex items-center space-x-1">
                      <StatusIcon className={`w-3 h-3 ${statusInfo.color}`} />
                      <span className={`text-label-10 font-medium ${statusInfo.color}`}>{statusInfo.label}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-label-12 text-neutral-500">Émise le {invoice.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-headline-18 font-semibold text-neutral-900">{invoice.amount.toLocaleString()} €</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default InvoicesScreen;
