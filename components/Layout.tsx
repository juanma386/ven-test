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
  useBreakpointValue,
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

  // Define all useBreakpointValue hooks at the top
  const isMobile = useBreakpointValue({ base: true, md: false });
  const sidebarMinWidth = useBreakpointValue({ base: '0px', md: '200px', lg: '250px' });
  const headingSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const navItemFontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const infoIconSize = useBreakpointValue({ base: 3, md: 4 });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Flex direction={{ base: 'column', md: 'row' }}>
        {/* Sidebar for larger screens */}
        {!isMobile && (
          <Sidebar
            position="fixed"
            left="0"
            top="0"
            bottom="0"
            minWidth={sidebarMinWidth}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
            boxShadow="lg"
            p={{ base: 2, md: 4 }}
          >
            <SidebarToggleButton
              as={Button}
              variant="ghost"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              position="absolute"
              top="2"
              right="-10"
              zIndex="banner"
            >
              <HamburgerIcon />
            </SidebarToggleButton>
            <VStack align="start" spacing={4}>
              <Heading as="h2" size={headingSize}>
                Mi Aplicación
              </Heading>
              <SidebarSection mt={4}>
                <Nav orientation="vertical">
                  <NavItem as={Link} href="/">
                    <HStack>
                      <FaHome />
                      <Text fontSize={navItemFontSize}>Home</Text>
                    </HStack>
                  </NavItem>
                  <NavItem as={Link} href="/products">
                    <HStack>
                      <InfoOutlineIcon boxSize={infoIconSize} />
                      <Text
                        fontSize={navItemFontSize}
                        noOfLines={1}
                        overflow="hidden"
                        textOverflow="ellipsis"
                      >
                        Products
                      </Text>
                    </HStack>
                  </NavItem>
                  {/* ... otros NavItems ... */}
                </Nav>
              </SidebarSection>
            </VStack>
          </Sidebar>
        )}

        <Box
          as="main"
          flex="1"
          ml={{ base: 0, md: isSidebarOpen ? sidebarMinWidth : 0 }}
          transition="margin-left 0.2s ease-in-out"
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
                  {isMobile && (
                    <Button
                      variant="ghost"
                      onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                      aria-label="Toggle Menu"
                    >
                      <HamburgerIcon />
                    </Button>
                  )}
                  {!isMobile && (
                    <SidebarToggleButton
                      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                      mr={2}
                    >
                      <HamburgerIcon />
                    </SidebarToggleButton>
                  )}
                  <Heading as="h2" size="md">
                    {title}
                  </Heading>
                </HStack>
              </Flex>

              {isMobile && (
                <Collapse in={isMobileNavOpen} animateOpacity>
                  <VStack align="start" spacing={2} mt={2}>
                    <NavItem as={Link} href="/">
                      <HStack>
                        <FaHome />
                        <Text fontSize="sm">Home</Text>
                      </HStack>
                    </NavItem>
                    <NavItem as={Link} href="/products">
                      <HStack>
                        <InfoOutlineIcon boxSize={3} />
                        <Text fontSize="sm">Products</Text>
                      </HStack>
                    </NavItem>
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
