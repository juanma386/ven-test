import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import Layout from '../../components/Layout';

const ValidateSMS = () => {
  return (
    <Layout title="Verificar SMS">
      <Text>Te hemos enviado un código de verificación a tu número de teléfono.</Text>
      <Button mt={4} colorScheme="blue" width="full">
        Reenviar código
      </Button>
    </Layout>
  );
};

export default ValidateSMS;
