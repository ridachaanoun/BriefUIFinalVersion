     // Vérifier si le mode sombre est déjà activé au chargement de la page
     function checkDarkModePreference() {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
          document.body.classList.remove('light-mode');
        }
      }
    
      // Vérifier le mode sombre au chargement de la page
      checkDarkModePreference();