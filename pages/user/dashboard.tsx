// pages/user/dashboard.tsx
import { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Text,
  Spinner,
  SimpleGrid,
  Link as ChakraLink,
  HStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaUsers, FaBuilding, FaHandshake } from 'react-icons/fa';
import { getContactsCount, getCompaniesCount, getInteractionsByType, getTopUsers } from '../../utils/api';
import { CountResponse, InteractionsByTypeResponse, TopUserResponse, Metrics } from '../../interfaces';
import Layout from '../../components/Layout';

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [metrics, setMetrics] = useState<Metrics>({});
  const [apiError, setApiError] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  // Define colors for light and dark modes
  const bgBlue = useColorModeValue('blue.100', 'blue.700');
  const bgGreen = useColorModeValue('green.100', 'green.700');
  const bgOrange = useColorModeValue('orange.100', 'orange.700');
  const bgPurple = useColorModeValue('purple.100', 'purple.700');
  const bgGray = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const iconColor = useColorModeValue('gray.800', 'whiteAlpha.900');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setApiError(false);
      setErrorMessages([]);

      const placeholderMetrics: Metrics = {
        totalContacts: 0,
        newContacts: 0,
        totalCompanies: 0,
        interactionsByType: { email: 0, call: 0, meeting: 0, note: 0 },
        topUsers: [],
      };

      setMetrics(placeholderMetrics);

      try {
        const [totalContacts, newContacts, totalCompanies, interactionsByType, topUsers] = await Promise.allSettled([
          getContactsCount(),
          getContactsCount('week'),
          getCompaniesCount(),
          getInteractionsByType(),
          getTopUsers(),
        ]);

        setMetrics({
          totalContacts: totalContacts.status === 'fulfilled' ? totalContacts.value.count : 0,
          newContacts: newContacts.status === 'fulfilled' ? newContacts.value.count : 0,
          totalCompanies: totalCompanies.status === 'fulfilled' ? totalCompanies.value.count : 0,
          interactionsByType: interactionsByType.status === 'fulfilled' ? interactionsByType.value : placeholderMetrics.interactionsByType,
          topUsers: topUsers.status === 'fulfilled' ? topUsers.value : [],
        });

        if (
          totalContacts.status === 'rejected' &&
          newContacts.status === 'rejected' &&
          totalCompanies.status === 'rejected' &&
          interactionsByType.status === 'rejected' &&
          topUsers.status === 'rejected'
        ) {
          setApiError(true);
        }
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setApiError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Layout title="Dashboard">
        <Flex justifyContent="center" alignItems="center" height="100vh">
          <Spinner size="xl" />
        </Flex>
      </Layout>
    );
  }

  return (
    <Layout title="Dashboard">
      <Box py={4}>
        <Text fontSize="2xl" mb={4} color={textColor}>Welcome to the Dashboard</Text>

        {apiError && (
          <Alert status="warning" mb={4} bg={useColorModeValue('orange.100', 'orange.700')}>
            <AlertIcon />
            <AlertTitle mr={2}>Error fetching API data.</AlertTitle>
            <AlertDescription>
              Some metrics could not be retrieved.
            </AlertDescription>
          </Alert>
        )}

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Box bg={bgBlue} p={5} borderRadius="md" boxShadow="md">
            <Link href="/contacts" passHref legacyBehavior>
              <ChakraLink style={{ textDecoration: 'none' }}>
                <HStack>
                  <FaUsers size={20} color={iconColor} />
                  <Box>
                    <Text fontSize="lg" fontWeight="bold" color={textColor}>Total Contacts</Text>
                    <Text fontSize="3xl" color={textColor}>{metrics.totalContacts ?? 'N/A'}</Text>
                  </Box>
                </HStack>
              </ChakraLink>
            </Link>
          </Box>

          <Box bg={bgGreen} p={5} borderRadius="md" boxShadow="md">
            <HStack>
              <FaUsers size={20} color={iconColor} />
              <Box>
                <Text fontSize="lg" fontWeight="bold" color={textColor}>New Contacts (Last week)</Text>
                <Text fontSize="3xl" color={textColor}>{metrics.newContacts ?? 'N/A'}</Text>
              </Box>
            </HStack>
          </Box>

          <Box bg={bgOrange} p={5} borderRadius="md" boxShadow="md">
            <Link href="/companies" passHref legacyBehavior>
              <ChakraLink style={{ textDecoration: 'none' }}>
                <HStack>
                  <FaBuilding size={20} color={iconColor} />
                  <Box>
                    <Text fontSize="lg" fontWeight="bold" color={textColor}>Total Companies</Text>
                    <Text fontSize="3xl" color={textColor}>{metrics.totalCompanies ?? 'N/A'}</Text>
                  </Box>
                </HStack>
              </ChakraLink>
            </Link>
          </Box>

          {metrics.topUsers && metrics.topUsers.length > 0 && (
            <Box bg={bgPurple} p={5} borderRadius="md" boxShadow="md">
              <Text fontSize="lg" fontWeight="bold" color={textColor}>Top 5 Active Users</Text>
              {metrics.topUsers.map((user) => (
                <Text key={user.user_id} fontSize="xl" color={textColor}>
                  {user.user_id}: {user.count}
                </Text>
              ))}
            </Box>
          )}
        </SimpleGrid>

        {/* Interactions by type */}
        {metrics.interactionsByType &&
          Object.keys(metrics.interactionsByType).length > 0 && (
            <Box mt={8}>
              <Text fontSize="xl" mb={2} color={textColor}>Interactions by Type</Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
                {Object.entries(metrics.interactionsByType).map(
                  ([type, count]) => (
                    <Box
                      key={type}
                      bg={bgGray}
                      p={4}
                      borderRadius="md"
                      boxShadow="md"
                    >
                      <HStack>
                        <FaHandshake size={20} color={iconColor} />
                        <Box>
                          <Text fontSize="md" fontWeight="bold" color={textColor}>
                            {type}
                          </Text>
                          <Text fontSize="2xl" color={textColor}>{count}</Text>
                        </Box>
                      </HStack>
                    </Box>
                  )
                )}
              </SimpleGrid>
            </Box>
          )}
      </Box>
    </Layout>
  );
};

export default Dashboard;