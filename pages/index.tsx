import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Flex, Spinner, Text, Box, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';

const PreloadPage = () => {
  const spinnerColor = useColorModeValue('blue.500', 'blue.300');
  const messageColor = useColorModeValue('gray.600', 'gray.200');

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Recarga la página después de 2 segundos
    };

    // Evento que se ejecuta cuando el DOM está completamente cargado
    window.addEventListener('load', handleLoad);

    // Limpieza del evento cuando el componente se desmonta
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <Layout title="Cargando...">
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100vh"
        p={4}
        textAlign="center"
      >
        <Box mb={6}>
          <Spinner size="xl" color={spinnerColor} />
        </Box>
        <Text fontSize={useBreakpointValue({ base: 'lg', md: 'xl' })} color={messageColor}>
          Cargando, por favor espere...
        </Text>
      </Flex>
    </Layout>
  );
};

export default PreloadPage;
