import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Invoice, 
  Users, 
  Package, 
  User 
} from 'iconoir-react';

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'invoices', label: 'Factures', icon: Invoice },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'items', label: 'Articles', icon: Package },
    { id: 'profile', label: 'Profil', icon: User }
  ];

  return (
    <motion.nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 shadow-soft">
      <div className="flex justify-around items-center px-4 py-3">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-200
                ${isActive ? 'bg-accent-50 text-accent-500' : 'bg-neutral-100 text-neutral-600'}
                hover:scale-105 active:scale-95
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconComponent width={24} height={24} className="mb-1" />
              <span className="text-label-12 font-medium">{tab.label}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default TabNavigation;
