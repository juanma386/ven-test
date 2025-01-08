import React from 'react';
import { Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import Link from 'next/link';

import Layout from '../../components/Layout';

const ForgotPassword = () => {
    
  return (
    <Layout title="Recuperar Contraseña">
      <h2>Recuperar Contraseña</h2>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Correo electrónico" />
      </FormControl>
      <Button mt={4} colorScheme="blue" width="full">
        Enviar enlace de recuperación
      </Button>
      <Link href="/auth/signin">Volver a Iniciar sesión</Link>
    </Layout>
  );
};

export default ForgotPassword;

