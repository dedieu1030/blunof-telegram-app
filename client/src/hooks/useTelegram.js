import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour l'intégration Telegram Mini-Apps
 * Gère le thème, l'API et les événements Telegram
 */
export const useTelegram = () => {
  const [webApp, setWebApp] = useState(null);
  const [theme, setTheme] = useState('light');
  const [isReady, setIsReady] = useState(false);
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    // Vérifier si nous sommes dans Telegram
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      setWebApp(tg);
      setIsTelegram(true);
      
      // Configuration initiale
      tg.ready();
      tg.expand();
      
      // Écouter les changements de thème
      tg.onEvent('theme_changed', () => {
        setTheme(tg.colorScheme);
      });
      
      // Écouter les changements de viewport
      tg.onEvent('viewport_changed', () => {
        // Gérer les changements de viewport si nécessaire
      });
      
      // Configurer le comportement de swipe
      tg.setSwipeBehavior('none');
      
      // Configurer le comportement de fermeture
      tg.setClosingBehavior({
        need_confirmation: true,
        hint: 'Êtes-vous sûr de vouloir fermer l\'application ?'
      });
      
      setTheme(tg.colorScheme);
      setIsReady(true);
    } else {
      // Mode développement - simulation Telegram
      setWebApp({
        ready: () => console.log('Telegram WebApp ready (dev mode)'),
        expand: () => console.log('Telegram WebApp expanded (dev mode)'),
        onEvent: (event, callback) => console.log(`Event ${event} registered (dev mode)`),
        setSwipeBehavior: (behavior) => console.log(`Swipe behavior set to ${behavior} (dev mode)`),
        setClosingBehavior: (config) => console.log('Closing behavior configured (dev mode)'),
        requestContentSafeArea: () => Promise.resolve({ top: 0, bottom: 0, left: 0, right: 0 }),
        colorScheme: 'light'
      });
      setIsTelegram(false);
      setIsReady(true);
    }
  }, []);

  const themeParams = webApp?.themeParams || {};
  const colorScheme = webApp?.colorScheme || 'light';

  return {
    webApp,
    theme,
    isReady,
    isTelegram,
    themeParams,
    colorScheme
  };
};
