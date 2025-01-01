import { useColorMode } from '@chakra-ui/react';
import moment from 'moment-timezone'; // Importa moment-timezone
import { useEffect } from 'react';

function useAutoDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const changeTheme = () => {
      const clientTimeZone = moment.tz.guess(); // Obtiene la zona horaria del cliente
      const currentHour = moment().tz(clientTimeZone).hour(); // Obtiene la hora en la zona horaria del cliente
      const isDarkHour = currentHour >= 18 || currentHour < 6; // Hora de la noche (6 PM - 6 AM)

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
    const interval = setInterval(changeTheme, 60000); // Verifica cada minuto

    return () => clearInterval(interval);
  }, [colorMode, toggleColorMode]);

}

export default useAutoDarkMode;
