import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import Layout from '../../components/Layout';


const ValidateMail = () => {
  return (
    <Layout title="Verificar Correo">
      <Text>Hemos enviado un enlace de verificación a tu correo. Por favor, revisa tu bandeja de entrada.</Text>
      <Button mt={4} colorScheme="blue" width="full">
        Reenviar enlace
      </Button>
    </Layout>
  );
};

export default ValidateMail;
