import React from 'react';
import { Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import Layout from '../../components/Layout';


const TwoFAAuth = () => {

  return (
    <Layout title="Autenticación de dos factores">
      <h2>Autenticación de dos factores</h2>
      <FormControl>
        <FormLabel>Código de verificación</FormLabel>
        <Input type="text" placeholder="Código" />
      </FormControl>
      <Button mt={4} colorScheme="blue" width="full">
        Verificar
      </Button>
    </Layout>
  );
};

export default TwoFAAuth;
