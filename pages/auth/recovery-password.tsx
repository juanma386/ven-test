import React, { useState } from 'react';
import { Button, Input, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import Link from 'next/link';

import Layout from '../../components/Layout';

const RecoveryPassword = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    try {
      const response = await fetch('https://hexome-systems.servehttp.com/auth/recover-password', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        toast({
          title: 'Correo enviado',
          description: 'Se ha enviado un correo para recuperar tu contraseña.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setEmail(''); // Limpia el campo de entrada
      } else {
        const errorData = await response.json();
        toast({
          title: 'Error',
          description: errorData.message || 'Hubo un error al enviar la solicitud',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Hubo un error al enviar la solicitud',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Layout title="Recuperar contraseña">
      <h2>Recuperar contraseña</h2>
      <p>Por favor, ingresa tu correo electrónico para recibir un enlace de recuperación.</p>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Correo electrónico</FormLabel>
          <Input
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <Button mt={4} colorScheme="blue" width="full" type="submit">
          Enviar correo de recuperación
        </Button>
      </form>
      <br />
      <Link href="/auth/signin">¿Ya tienes cuenta? Inicia sesión</Link>
    </Layout>
  );
};

export default RecoveryPassword;
