import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Invoice, TrendingUp, Calendar, Star, Zap } from 'iconoir-react';

const HomeScreen = () => {
  const stats = { totalInvoices: 24, totalRevenue: 15420, thisMonth: 8 };
  const achievements = [
    { id: 1, name: 'Première facture', icon: Invoice, unlocked: true, color: 'bg-success-500' },
    { id: 2, name: '10 factures', icon: Trophy, unlocked: true, color: 'bg-accent-500' },
    { id: 3, name: '20 factures', icon: Star, unlocked: false, color: 'bg-neutral-300' },
    { id: 4, name: 'Expert', icon: Zap, unlocked: false, color: 'bg-neutral-300' }
  ];

  return (
    <motion.div className="min-h-screen bg-neutral-50 px-4 py-6">
      <motion.header className="mb-8">
        <h1 className="text-headline-24 text-neutral-900 mb-2">Bonjour ! 👋</h1>
        <p className="text-body-16 text-neutral-600">Voici un aperçu de votre activité</p>
      </motion.header>

      <motion.section className="mb-8">
        <h2 className="text-headline-18 text-neutral-900 mb-4">Statistiques</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-soft rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
                <Invoice className="w-5 h-5 text-accent-600" />
              </div>
              <TrendingUp className="w-4 h-4 text-success-500" />
            </div>
            <p className="text-headline-20 font-semibold text-neutral-900">{stats.totalInvoices}</p>
            <p className="text-label-12 text-neutral-600">Factures totales</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-soft rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-success-100 rounded-xl flex items-center justify-center">
                <Trophy className="w-5 h-5 text-success-600" />
              </div>
              <Calendar className="w-4 h-4 text-accent-500" />
            </div>
            <p className="text-headline-20 font-semibold text-neutral-900">{stats.thisMonth}</p>
            <p className="text-label-12 text-neutral-600">Ce mois</p>
          </div>
        </div>
      </motion.section>

      <motion.section className="mb-8">
        <h2 className="text-headline-18 text-neutral-900 mb-4">Récompenses</h2>
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <div key={achievement.id} className={`bg-white/80 backdrop-blur-sm border border-white/20 shadow-soft rounded-2xl p-4 text-center ${achievement.unlocked ? 'opacity-100' : 'opacity-50'}`}>
                <div className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <p className="text-body-14 font-medium text-neutral-900">{achievement.name}</p>
                <p className="text-label-12 text-neutral-500">{achievement.unlocked ? 'Débloqué' : 'À venir'}</p>
              </div>
            );
          })}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HomeScreen;
