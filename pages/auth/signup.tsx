import React from 'react';
import { Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from '../../components/Layout';


const SignUp = () => {

  return (
    <Layout title="Registrarse">
      <h2>Registrarse</h2>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Correo electrónico" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Contraseña</FormLabel>
        <Input type="password" placeholder="Contraseña" />
      </FormControl>
      <Button mt={4} colorScheme="blue" width="full">
        Registrarse
      </Button>
      <Link href="/auth/signin">¿Ya tienes cuenta? Iniciar sesión</Link>
    </Layout>
  );
};

export default SignUp;

