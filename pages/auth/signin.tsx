import React, { useState } from 'react';
import { Button, Input, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import Link from 'next/link';

import Layout from '../../components/Layout';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    try {
      const response = await fetch('https://hexome-systems.servehttp.com/auth/login', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        
        // Guarda el token en el localStorage
        localStorage.setItem('App.settings.access_token', data.token); 
        const accessToken = localStorage.getItem('App.settings.access_token'); 

        console.log(accessToken);

        // Muestra un toast de éxito
        toast({
          title: 'Inicio de sesión exitoso',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        // Redirige al usuario después de un breve retraso (opcional)
        setTimeout(() => {
          window.location.href = '/'; 
        }, 1000); 

      } else {
        const errorData = await response.json();
        toast({
          title: 'Error',
          description: errorData.message || 'Hubo un error al iniciar sesión',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Hubo un error al iniciar sesión',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Layout title="Iniciar sesión">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}> 
        <FormControl>
          <FormLabel>Usuario</FormLabel> 
          <Input 
            type="text" 
            placeholder="Nombre de usuario" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Contraseña</FormLabel>
          <Input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </FormControl>
        <Button mt={4} colorScheme="blue" width="full" type="submit">
          Iniciar sesión
        </Button>
      </form>
      <Link href="/auth/forgot-password">¿Olvidaste tu contraseña?</Link>
      <br />
      <Link href="/auth/signup">¿No tienes cuenta? Regístrate</Link>
    </Layout>
  );
};

export default SignIn;