// pages/index.tsx
import React from 'react';
import {
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Divider,
  List,
  ListItem,
  Flex,
  Box,
  VStack,
  HStack,
  Icon
} from '@chakra-ui/react';
import { FaUsers, FaBox, FaChartLine, FaWrench } from 'react-icons/fa'; // Importa íconos
import Layout from '../components/Layout';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Layout title="Dashboard | Mi Aplicación">
      <VStack spacing={5} align="stretch" mb={8}>
        <Heading as="h1" size="xl">
          Dashboard
        </Heading>
        <Text fontSize="lg">
          Bienvenido al panel de control de tu aplicación. Aquí puedes obtener una visión general de las
          estadísticas y la actividad reciente.
        </Text>
      </VStack>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={6}
        mb={8}
      >
        <GridItem>
          <Stat
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            boxShadow="sm"
            bg="blue.50"
            color="blue.600"
          >
            <StatLabel fontWeight="medium">
              <Icon as={FaUsers} mr={2} />
              Usuarios
            </StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>
        </GridItem>
        <GridItem>
          <Stat
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            boxShadow="sm"
            bg="green.50"
            color="green.600"
          >
            <StatLabel fontWeight="medium">
              <Icon as={FaBox} mr={2} />
              Productos
            </StatLabel>
            <StatNumber>5,300</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
        </GridItem>
        <GridItem>
            <Stat
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                boxShadow="sm"
                bg="purple.50" 
                color="purple.600"
            >
                <StatLabel fontWeight="medium">
                    <Icon as={FaChartLine} mr={2} />
                    Ventas
                </StatLabel>
                <StatNumber>$1,234,567</StatNumber>
                <StatHelpText>
                    <StatArrow type="increase" />
                    15.62%
                </StatHelpText>
            </Stat>
        </GridItem>

        <GridItem>
            <Stat
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                boxShadow="sm"
                bg="orange.50" 
                color="orange.600" 
            >
                <StatLabel fontWeight="medium">
                    <Icon as={FaWrench} mr={2} />
                    Tareas
                </StatLabel>
                <StatNumber>42</StatNumber>
                <StatHelpText>
                    <StatArrow type="increase" />
                    5.12%
                </StatHelpText>
            </Stat>
        </GridItem>
      </Grid>

      <Divider mb={8} />

      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" mb={8}>
        <Box flex="1" mr={{ md: 8 }}>
          <Heading as="h2" size="lg" mb={4}>
            Actividad Reciente
          </Heading>
          <List spacing={3}>
            <ListItem>
              <Flex align="center" justify="space-between">
                <Text>
                  <Text as="span" fontWeight="bold">
                    John Doe
                  </Text>{' '}
                  se registró como nuevo usuario.
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Hace 5 minutos
                </Text>
              </Flex>
            </ListItem>
            <ListItem>
                <Flex align="center" justify="space-between">
                    <Text>
                        <Text as="span" fontWeight="bold">
                        Producto Laptop Gamer
                        </Text>{' '}
                        fue actualizado.
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                        Hace 1 hora
                    </Text>
                </Flex>
            </ListItem>
            {/* Agrega más elementos de actividad reciente */}
          </List>
        </Box>
      </Flex>

      <Divider mb={8} />

      <HStack spacing={4} justify="center">
        <Link href="/users">
            <Button colorScheme="blue" size="lg" leftIcon={<Icon as={FaUsers} />}>
                Administrar Usuarios
            </Button>
        </Link>
        <Link href="/products">
            <Button colorScheme="blue" size="lg" leftIcon={<Icon as={FaBox} />}>
                Administrar Productos
            </Button>
        </Link>
      </HStack>
    </Layout>
  );
};

export default HomePage;