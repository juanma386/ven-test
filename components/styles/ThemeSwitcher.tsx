import { Box, HStack, IconButton, Text, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box 
      onClick={toggleColorMode}
      p={4}
      borderRadius="md"
      bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      transition="background-color 0.3s"
    >
      <HStack spacing={4}>
        {colorMode === 'light' ? (
          <FaMoon size="24px" color="gray.500" />
        ) : (
          <FaSun size="24px" color="yellow.400" />
        )}
        <IconButton
          aria-label="Cambiar tema"
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          variant="ghost"
        />
        <Text fontWeight="bold" color={colorMode === 'light' ? 'gray.800' : 'white'}>
          {colorMode === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
        </Text>
        {colorMode === 'light' ? (
          <FaSun size="24px" color="yellow.400" />
        ) : (
          <FaMoon size="24px" color="gray.500" />
        )}
      </HStack>
    </Box>
  );
};

export default ThemeSwitcher;
