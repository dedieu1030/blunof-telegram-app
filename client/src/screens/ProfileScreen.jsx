import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Trophy, Star, Zap, Crown, Target, LogOut, Help, Info } from 'iconoir-react';

const ProfileScreen = () => {
  const userProfile = { name: 'Alexandre Dubois', email: 'alexandre@blunof.com', company: 'Blunof Solutions', level: 8, experience: 1250, nextLevel: 1500, totalInvoices: 24, totalRevenue: 15420 };
  const achievements = [
    { id: 1, name: 'Première facture', icon: Target, unlocked: true, color: 'bg-success-500', date: '2024-01-15' },
    { id: 2, name: '10 factures', icon: Star, unlocked: true, color: 'bg-accent-500', date: '2024-01-20' },
    { id: 3, name: '20 factures', icon: Trophy, unlocked: true, color: 'bg-warning-500', date: '2024-01-25' },
    { id: 4, name: 'Expert fiscal', icon: Crown, unlocked: false, color: 'bg-neutral-300', date: null },
    { id: 5, name: 'Maître facturier', icon: Zap, unlocked: false, color: 'bg-neutral-300', date: null }
  ];
  const menuItems = [
    { id: 'settings', label: 'Paramètres', icon: Settings, color: 'text-neutral-600' },
    { id: 'help', label: 'Aide & Support', icon: Help, color: 'text-neutral-600' },
    { id: 'about', label: 'À propos', icon: Info, color: 'text-neutral-600' },
    { id: 'logout', label: 'Déconnexion', icon: LogOut, color: 'text-error-600' }
  ];

  const progressPercentage = (userProfile.experience / userProfile.nextLevel) * 100;

  return (
    <motion.div className="min-h-screen bg-neutral-50 px-4 py-6">
      <motion.header className="mb-8">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-accent-600" />
          </div>
          <h1 className="text-headline-24 text-neutral-900 mb-2">{userProfile.name}</h1>
          <p className="text-body-16 text-neutral-600 mb-1">{userProfile.company}</p>
          <p className="text-body-14 text-neutral-500">{userProfile.email}</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-soft rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-warning-500" />
              <span className="text-body-16 font-medium text-neutral-900">Niveau {userProfile.level}</span>
            </div>
            <span className="text-label-12 text-neutral-500">{userProfile.experience} / {userProfile.nextLevel} XP</span>
          </div>
          
          <div className="w-full bg-neutral-200 rounded-full h-2 mb-2">
            <motion.div className="bg-accent-500 h-2 rounded-full" initial={{ width: 0 }} animate={{ width: `${progressPercentage}%` }} transition={{ duration: 1, delay: 0.5 }} />
          </div>
          
          <div className="flex justify-between text-label-12 text-neutral-500">
            <span>Niveau {userProfile.level}</span>
            <span>Niveau {userProfile.level + 1}</span>
          </div>
        </div>
      </motion.header>

      <motion.section className="mb-8">
        <h2 className="text-headline-18 text-neutral-900 mb-4">Statistiques</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-soft rounded-2xl p-4 text-center">
            <p className="text-headline-20 font-semibold text-neutral-900">{userProfile.totalInvoices}</p>
            <p className="text-label-12 text-neutral-600">Factures totales</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-soft rounded-2xl p-4 text-center">
            <p className="text-headline-20 font-semibold text-neutral-900">{userProfile.totalRevenue.toLocaleString()} €</p>
            <p className="text-label-12 text-neutral-600">Revenus totaux</p>
          </div>
        </div>
      </motion.section>

      <motion.section className="mb-8">
        <h2 className="text-headline-18 text-neutral-900 mb-4">Récompenses</h2>
        <div className="space-y-3">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <div key={achievement.id} className={`bg-white/80 backdrop-blur-sm border border-white/20 shadow-soft rounded-2xl p-4 ${achievement.unlocked ? 'opacity-100' : 'opacity-50'}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${achievement.color} rounded-full flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-body-14 font-medium text-neutral-900">{achievement.name}</p>
                    <p className="text-label-12 text-neutral-500">{achievement.unlocked ? `Débloqué le ${achievement.date}` : 'À venir'}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      <motion.section>
        <h2 className="text-headline-18 text-neutral-900 mb-4">Paramètres</h2>
        <div className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button key={item.id} className="w-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-soft rounded-2xl p-4 flex items-center space-x-3">
                <IconComponent className={`w-5 h-5 ${item.color}`} />
                <span className={`text-body-14 font-medium ${item.color}`}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ProfileScreen;
