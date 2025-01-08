import React from 'react';
import Layout from '../../components/Layout';

import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Profile = () => {
  return (
    <Layout title="Perfil">
      <h2>Mi Perfil</h2>
      <FormControl>
        <FormLabel>Nombre</FormLabel>
        <Input type="text" placeholder="Tu nombre" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Correo electrónico" />
      </FormControl>
      <Button mt={4} colorScheme="blue" width="full">
        Guardar cambios
      </Button>
    </Layout>
  );
};

export default Profile;

