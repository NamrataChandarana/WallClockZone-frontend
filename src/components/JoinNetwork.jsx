import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { MapPin, Shield, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function JoinNetwork() {
  const features = [
    {
      icon: MapPin,
      title: "Pan-India Network",
      description: "Connect with businesses across India from major manufacturing hubs to emerging markets."
    },
    {
      icon: Shield,
      title: "Verified Partners",
      description: "All businesses in our network are verified, ensuring secure and reliable partnerships."
    },
    {
      icon: Users,
      title: "Industry Network",
      description: "Join India's largest community of wall clock industry professionals."
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Access new opportunities and connect with leading manufacturers across India."
    }
  ];

  return (
    <Box className="min-h-screen bg-gradient-to-b from-gray-50 to-white  py-10" >
      <Container maxW="container.xl" px={4}>
        <VStack spacing={1} maxW="3xl" mx="auto" textAlign="center" mb={12}>
          <Heading as="h2" fontSize={{ base: '4xl', md: '4xl' }} fontWeight="semibold" fontFamily="Inter" >
            Join Network
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'lg' }} color="gray.600" fontFamily="Inter" >
            Connect with verified manufacturers, suppliers, and buyers across India.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} maxW="7xl" mx="auto">
          {features.map((feature, index) => (
            <Box
              key={index}
              className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors"
              borderRadius="lg"
              p={6}
            >
              <HStack align="start" spacing={4}>
                <Box className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Icon as={feature.icon} className="w-6 h-6 text-blue-600" />
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="semibold" mb={2}>
                    {feature.title}
                  </Text>
                  <Text color="gray.600">{feature.description}</Text>
                </Box>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>

        <VStack spacing={6} mt={6}>
          <Button
            size="lg"
            // colorScheme="blue"
            height="45px"
            px={12}
            fontSize="lg"
            bgColor={"#18181B"}
            color={'white'}
            _hover={{ bg: "#18181B"}}
          >
            <Link to="/register" className='hover:text-white'>
                Register Now
            </Link>
            
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default JoinNetwork;