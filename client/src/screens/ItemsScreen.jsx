import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Package, Tag, Euro, Edit, Trash } from 'iconoir-react';

const ItemsScreen = () => {
  const items = [
    { id: 1, name: 'Développement Web', description: 'Création de sites web et applications', price: 85, unit: 'heure', category: 'Services', taxRate: 20 },
    { id: 2, name: 'Design UI/UX', description: 'Conception d\'interfaces utilisateur', price: 65, unit: 'heure', category: 'Services', taxRate: 20 },
    { id: 3, name: 'Consultation', description: 'Conseil en stratégie digitale', price: 120, unit: 'heure', category: 'Services', taxRate: 20 }
  ];

  return (
    <motion.div className="min-h-screen bg-neutral-50 px-4 py-6">
      <motion.header className="mb-8">
        <h1 className="text-headline-24 text-neutral-900 mb-2">Articles</h1>
        <p className="text-body-16 text-neutral-600">Gérez vos produits et services</p>
      </motion.header>

      <motion.section className="mb-6">
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input type="text" placeholder="Rechercher un article..." className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl text-body-14 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500/20" />
          </div>
          <button className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center shadow-soft">
            <Filter className="w-5 h-5 text-neutral-600" />
          </button>
        </div>
      </motion.section>

      <motion.div className="mb-6">
        <button className="w-full bg-accent-500 text-white py-4 px-6 rounded-2xl font-medium text-body-16 flex items-center justify-center space-x-2 shadow-medium hover:bg-accent-600 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Nouvel Article</span>
        </button>
      </motion.div>

      <motion.section>
        <h2 className="text-headline-18 text-neutral-900 mb-4">Articles récents</h2>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-soft rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-body-16 font-medium text-neutral-900">{item.name}</p>
                    <p className="text-label-12 text-neutral-600">{item.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-headline-18 font-semibold text-neutral-900">{item.price} €</p>
                  <p className="text-label-12 text-neutral-500">/ {item.unit}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Tag className="w-4 h-4 text-neutral-400" />
                    <span className="text-label-12 text-neutral-600">{item.category}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Euro className="w-4 h-4 text-neutral-400" />
                    <span className="text-label-12 text-neutral-600">TVA {item.taxRate}%</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center hover:bg-neutral-200 transition-colors">
                    <Edit className="w-4 h-4 text-neutral-600" />
                  </button>
                  <button className="w-8 h-8 bg-error-50 rounded-lg flex items-center justify-center hover:bg-error-100 transition-colors">
                    <Trash className="w-4 h-4 text-error-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ItemsScreen;
