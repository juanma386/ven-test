import { useColorMode } from '@chakra-ui/react';
import moment from 'moment';
import { useEffect } from 'react'; // Importa useEffect

function useAutoDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const changeTheme = () => {
      const currentHour = moment().hour();
      const isDarkHour = currentHour >= 18 || currentHour < 6;

      const storedTheme = localStorage.getItem('theme');

      if (storedTheme) {
        if (storedTheme === 'dark' && colorMode === 'light') {
          toggleColorMode();
        } else if (storedTheme === 'light' && colorMode === 'dark') {
          toggleColorMode();
        }
      } else {
        if (isDarkHour && colorMode === 'light') {
          toggleColorMode();
        } else if (!isDarkHour && colorMode === 'dark') {
          toggleColorMode();
        }
      }
    };

    changeTheme();
    const interval = setInterval(changeTheme, 60000);

    return () => clearInterval(interval);
  }, [colorMode, toggleColorMode]);
}

export default useAutoDarkMode;