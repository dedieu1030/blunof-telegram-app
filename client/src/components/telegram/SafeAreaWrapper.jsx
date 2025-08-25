import React, { useEffect, useState } from 'react';

const SafeAreaWrapper = ({ children }) => {
  const [safeAreaInsets, setSafeAreaInsets] = useState({
    top: 16,
    bottom: 16,
    left: 16,
    right: 16
  });

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.ready();
      
      if (webApp.requestContentSafeArea) {
        webApp.requestContentSafeArea().then((insets) => {
          setSafeAreaInsets({
            top: Math.max(insets.top || 0, 16),
            bottom: Math.max(insets.bottom || 0, 16),
            left: Math.max(insets.left || 0, 16),
            right: Math.max(insets.right || 0, 16)
          });
        });
      }
    }
  }, []);

  const safeAreaStyles = {
    paddingTop: `${safeAreaInsets.top}px`,
    paddingBottom: `${safeAreaInsets.bottom}px`,
    paddingLeft: `${safeAreaInsets.left}px`,
    paddingRight: `${safeAreaInsets.right}px`
  };

  return (
    <div className="min-h-screen bg-neutral-50" style={safeAreaStyles}>
      {children}
    </div>
  );
};

export default SafeAreaWrapper;
