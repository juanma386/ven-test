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
  Icon,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaUsers, FaBox, FaChartLine, FaWrench } from 'react-icons/fa';
import Layout from '../components/Layout';
import Link from 'next/link';

const HomePage = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.600');
  const headingColor = useColorModeValue('gray.800', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const activityTextColor = useColorModeValue('gray.500', 'gray.300');

  return (
    <Layout title="Dashboard | Mi Aplicación">
      <VStack spacing={5} align="stretch" mb={8}>
        <Heading
          as="h1"
          size={useBreakpointValue({ base: 'lg', md: 'xl' })}
          color={headingColor}
        >
          Dashboard
        </Heading>
        <Text fontSize={useBreakpointValue({ base: 'md', md: 'lg' })} color={textColor}>
          Bienvenido al panel de control de tu aplicación. Aquí puedes obtener una
          visión general de las estadísticas y la actividad reciente.
        </Text>
      </VStack>

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={6}
        mb={8}
      >
        <GridItem>
          <Stat
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            boxShadow="sm"
            bg={useColorModeValue('blue.50', 'blue.900')}
            color={useColorModeValue('blue.600', 'blue.300')}
            borderColor={cardBorder}
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
            bg={useColorModeValue('green.50', 'green.900')}
            color={useColorModeValue('green.600', 'green.300')}
            borderColor={cardBorder}
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
            bg={useColorModeValue('purple.50', 'purple.900')}
            color={useColorModeValue('purple.600', 'purple.300')}
            borderColor={cardBorder}
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
            bg={useColorModeValue('orange.50', 'orange.900')}
            color={useColorModeValue('orange.600', 'orange.300')}
            borderColor={cardBorder}
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

      <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="sm" bg={cardBg} borderColor={cardBorder}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          mb={8}
          wrap="wrap"
        >
          <Box flex="1" mr={{ md: 8 }} mb={{ base: 4, md: 0 }}>
            <Heading as="h2" size="lg" mb={4} color={headingColor}>
              Actividad Reciente
            </Heading>
            <List spacing={3}>
              <ListItem overflow="hidden">
                <Flex align="center" justify="space-between">
                  <Text noOfLines={2} color={textColor}>
                    <Text as="span" fontWeight="bold">
                      John Doe
                    </Text>{' '}
                    se registró como nuevo usuario.
                  </Text>
                  <Text fontSize="sm" color={activityTextColor} noOfLines={1}>
                    Hace 5 minutos
                  </Text>
                </Flex>
              </ListItem>
              <ListItem overflow="hidden">
                <Flex align="center" justify="space-between">
                  <Text noOfLines={2} color={textColor}>
                    <Text as="span" fontWeight="bold">
                      Producto Laptop Gamer
                    </Text>{' '}
                    fue actualizado.
                  </Text>
                  <Text fontSize="sm" color={activityTextColor} noOfLines={1}>
                    Hace 1 hora
                  </Text>
                </Flex>
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Box>

      <Divider mb={8} />

      <HStack spacing={useBreakpointValue({ base: 2, md: 4 })} justify="center" wrap="wrap">
        <Link href="/users" passHref>
          <Button colorScheme="blue" size={useBreakpointValue({ base: 'sm', md: 'lg' })} leftIcon={<Icon as={FaUsers} />}>
            Administrar Usuarios
          </Button>
        </Link>
        <Link href="/products" passHref>
          <Button colorScheme="blue" size={useBreakpointValue({ base: 'sm', md: 'lg' })} leftIcon={<Icon as={FaBox} />}>
            Administrar Productos
          </Button>
        </Link>
      </HStack>
    </Layout>
  );
};

export default HomePage;
