import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody, Center, VStack, Grid } from '@chakra-ui/react';
import { UserPlus, Search, MessageCircle } from 'lucide-react';

const StepIcon = ({ icon: Icon, number }) => (
  <Box position="relative" className="group-hover:scale-110 transition-transform">
    <Center
      w="48px"
      h="48px"
      bg="blue.600"
      color="white"
      borderRadius="lg"
      mb={4}
    >
      <Icon size={24} />
    </Center>
    <Box
      position="absolute"
      top="-12px"
      right="-12px"
      w="24px"
      h="24px"
      borderRadius="full"
      bg="blue.600"
      color="white"
      fontSize="sm"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {number}
    </Box>
  </Box>
);

export default function HowItWorks() {
  return (
    <Box as="section" py={12} bg="gray.50">
      <Container maxW="container.xl" px={4}>
        <VStack maxW="2xl" mx="auto" mb={8} textAlign="center" spacing={1}>
          <Heading as="h2" size="lg" fontWeight="semibold" fontFamily="Inter" >
            How It Works
          </Heading>
          <Text fontSize="lg" color="gray.600" fontFamily="Inter" >
            Get started with Wall Clock Zone in three simple steps
          </Text>
        </VStack>

        <Box position="relative">
          <Box
            display={{ base: 'none', md: 'block' }}
            position="absolute"
            top="96px"
            left="0"
            w="100%"
            h="2px"
            className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"
          />

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              {
                icon: UserPlus,
                title: 'Register Your Business',
                description:
                  'Create your business profile and join our growing community of wall clock industry professionals.',
              },
              {
                icon: Search,
                title: 'Find Best Suppliers',
                description:
                  'Browse through verified suppliers and manufacturers to find the perfect match for your business needs.',
              },
              {
                icon: MessageCircle,
                title: 'Connect in Real-Time',
                description:
                  'Communicate directly with suppliers through our real-time messaging system to discuss opportunities.',
              },
            ].map((step, index) => (
              <Grid key={index} position="relative" className="group" templateColumns={{ base: "1fr", md: "repeat(1, 1fr)" }} gap={4}>
                <Card
                  variant="outline"
                  className="hover:shadow-lg transition-shadow"
                  height={"auto"}
                >
                  <CardBody>
                    <VStack spacing={2}>
                      <StepIcon icon={step.icon} number={index + 1} />
                      <Heading as="h3" size="md" fontWeight="semibold">
                        {step.title}
                      </Heading>
                      <Text color="gray.600">{step.description}</Text>
                    </VStack>
                  </CardBody>
                </Card>
              </Grid>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}