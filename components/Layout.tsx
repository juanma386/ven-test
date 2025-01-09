// components/Layout.tsx
import React, { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Button,
  Heading,
  useColorMode,
  Container,
  Collapse,
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import {
  HamburgerIcon,
  InfoOutlineIcon,
  SettingsIcon,
  BellIcon,
  EditIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import {
  Sidebar,
  SidebarToggleButton,
  SidebarSection,
  Nav,
  NavItem,
} from '@saas-ui/react';
import ThemeSwitcher from './styles/ThemeSwitcher'; // Importa el componente ThemeSwitcher

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Mi Aplicación',
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { colorMode } = useColorMode();

  // Define responsive styles usando objetos
  const isMobile = { base: true, md: false };
  const headingSize = { base: 'sm', md: 'md' };
  const navItemFontSize = { base: 'sm', md: 'md' };
  const infoIconSize = { base: 3, md: 4 };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Flex direction={{ base: 'column', md: 'row' }}>
        {/* Sidebar for larger screens */}
     
        <Box
          as="main"
          flex="1"
          sx={{
            marginLeft: 'var(--chakra-sizes-sidebar)',
            transition: 'margin-left 0.2s ease-in-out',
          }}
        >
          {/* Header for mobile navigation */}
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
            <Container maxW="container.lg" px={{ base: 2, md: 4 }}>
              <Flex align="center" justify="space-between">
                <HStack spacing={4} align="center">
                  {/* Mobile Menu Toggle */}
                  {isMobile.base && (
                    <Button
                      variant="ghost"
                      onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                      aria-label="Toggle Menu"
                    >
                      <HamburgerIcon />
                    </Button>
                  )}

                  {/* Sidebar Toggle for larger screens */}
                  {!isMobile.base && (
                    <SidebarToggleButton
                      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                      mr={2}
                    >
                      <HamburgerIcon />
                    </SidebarToggleButton>
                  )}

                  <Heading as="h2" size="md" sx={{ color: 'text' }}>
                    {title}
                  </Heading>
                </HStack>
              </Flex>

              {/* Mobile Navigation */}
              {isMobile.base && (
                <Collapse in={isMobileNavOpen} animateOpacity>
                  <VStack align="start" spacing={2} mt={2}>
                    <NavItem as={Link} href="/">
                      <HStack>
                        <FaHome />
                        <Text fontSize="sm" sx={{ color: 'text' }}>
                          Home
                        </Text>
                      </HStack>
                    </NavItem>
                    <ThemeSwitcher /> {/* Agrega el componente ThemeSwitcher aquí */}
                  </VStack>
                </Collapse>
              )}
            </Container>
          </Box>

          <Box py={4}>
            <Container maxW="container.lg" px={{ base: 2, md: 4 }}>
              {children}
            </Container>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
