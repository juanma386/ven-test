// components/Layout.tsx
import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
  Button,
  Heading,
  useColorMode,
  Container,
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import {
  HamburgerIcon,
  InfoOutlineIcon,
  SettingsIcon,
  BellIcon,
  EditIcon,
} from '@chakra-ui/icons';
import {
  Sidebar,
  SidebarToggleButton,
  SidebarSection,
  Nav,
  NavItem,
} from '@saas-ui/react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Mi Aplicación',
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Sidebar
        position="fixed"
        left="0"
        top="0"
        bottom="0"
        width="250px"
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
        boxShadow="lg"
        p={4}
      >
        <SidebarToggleButton
          as={Button}
          variant="ghost"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          position="absolute"
          top="2"
          right="-10"
          display={{ base: 'block', md: 'none' }}
          zIndex="banner"
        >
          <HamburgerIcon />
        </SidebarToggleButton>
        <VStack align="start" spacing={4}>
          <Heading as="h2" size="md">
            Mi Aplicación
          </Heading>
          <SidebarSection mt={4}>
          <Nav orientation="vertical">
              <NavItem
                as={Link}
                href="/"
                icon={<FaHome />}
                
                colorScheme={colorMode === 'light' ? 'gray' : 'blue'}
              />
              <NavItem
                as={Link}
                href="/products"
                icon={<InfoOutlineIcon boxSize={4} />}
                colorScheme={colorMode === 'light' ? 'gray' : 'blue'}
              />
              <NavItem
                as={Link}
                href="/about"
                icon={<InfoOutlineIcon boxSize={4} />}
                colorScheme={colorMode === 'light' ? 'gray' : 'blue'}
              />
              <NavItem
                as={Link}
                href="/users"
                icon={<SettingsIcon boxSize={4} />}
                colorScheme={colorMode === 'light' ? 'gray' : 'blue'}
              />
            </Nav>
          </SidebarSection>
        </VStack>
      </Sidebar>

      <Box
        as="main"
        ml={{ base: 0, md: isSidebarOpen ? '250px' : 'auto' }}
        transition="margin-left 0.2s ease-in-out"
      >
        <Box
          as="header"
          position="sticky"
          top={0}
          bg={colorMode === 'light' ? 'white' : 'gray.800'}
          boxShadow="sm"
          zIndex="docked"
          p={2}
          borderBottom="1px solid"
          borderBottomColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
        >
          <Container maxW="container.lg">
            <Flex align="center" justify="space-between">
              <HStack spacing={4} align="center">
                <SidebarToggleButton
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  display={{ base: 'block', md: 'none' }}
                  mr={2}
                >
                  <HamburgerIcon />
                </SidebarToggleButton>
                <Heading as="h2" size="md">
                  {title}
                </Heading>
              </HStack>

              <HStack spacing={4}>
                <Button
                  leftIcon={<BellIcon />}
                  variant="ghost"
                  size="sm"
                  _hover={{
                    bg: colorMode === 'light' ? 'gray.200' : 'gray.700',
                  }}
                  borderRadius="full"
                  p={0}
                >
                  <Box
                    as="span"
                    bg="red.500"
                    borderRadius="full"
                    boxSize={2}
                    ml={-2}
                    mt={-2}
                    position="absolute"
                  />
                </Button>

                <Menu>
                  <MenuButton
                    as={Button}
                    variant="ghost"
                    size="sm"
                    _hover={{
                      bg: colorMode === 'light' ? 'gray.200' : 'gray.700',
                    }}
                    borderRadius="full"
                    p={0}
                  >
                    <HStack spacing={2}>
                      <Avatar size="sm" name="John Doe" />
                      <Text display={{ base: 'none', md: 'block' }}>
                        John Doe
                      </Text>
                    </HStack>
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      as={Link}
                      href="/profile"
                      icon={<EditIcon boxSize={4} />}
                    >
                      Perfil
                    </MenuItem>
                    <MenuItem
                        
                        onClick={() => alert('Cerrar sesión')}
                        icon={<SettingsIcon boxSize={4} />}
                        _hover={{
                            bg: colorMode === 'light' ? 'gray.100' : 'gray.700',
                            color: colorMode === 'light' ? 'blue.500' : 'blue.300',
                        }}
                        _active={{
                            bg: colorMode === 'light' ? 'gray.200' : 'gray.600',
                        }}
                        color={colorMode === 'light' ? 'gray.700' : 'gray.200'}
                    >
                        <Link href="/profile" passHref legacyBehavior>
                            Cerrar Sesión
                        </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </Flex>
          </Container>
        </Box>
        <Box py={4}>
          <Container maxW="container.lg">{children}</Container>
        </Box>

        <Box
          as="footer"
          mt={4}
          borderTop="1px solid"
          borderTopColor="gray.200"
          pt={4}
        >
          <Container maxW="container.lg">
            <Box textAlign="center">
              &copy; {new Date().getFullYear()} Mi Aplicación
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
