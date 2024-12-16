import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { Factory, Store, Palette, Package, Truck } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Factory,
    title: "Manufacturers",
    description: "Connect with top suppliers and reach new markets. Join our platform to innovate and lead in the wall clock industry.",
    to: "/category/manufacturer"
  },
  {
    icon: Store,
    title: "Wholesalers",
    description: "Discover our ultimate network for wall clock wholesalers, offering access to quality products and reliable suppliers.",
    to: "/category/wholesaler"
  },
  {
    icon: Palette,
    title: "Designers",
    description: "Showcase your creativity and connect with manufacturers. Bring your unique designs to life on our platform.",
    to: "/category/designer"
  },
  {
    icon: Package,
    title: "Raw Material Dealers",
    description: "Source quality materials for wall clock manufacturing. Connect with trusted raw material suppliers worldwide.",
    to: "/category/raw-material-suppliers"
  },
  {
    icon: Truck,
    title: "Transporters",
    description: "Reliable logistics solutions for the wall clock industry. Ensure safe and timely delivery of your products.",
    to: "/category/transpoter"
  }
];

export default function ServicesSection() {
  return (
    <Box as="section" py={12} bgColor={'white'} >
      <Container maxW="container.xl" px={4}>
        <VStack spacing={1} mb={12} maxW="3xl" mx="auto" textAlign="center">
          <Heading as="h2" size="xl" fontWeight="semibold" fontFamily="Inter" >
            Services
          </Heading>
          <Text fontSize="lg" color="gray.600" fontFamily="Inter">
            Connect with industry leaders and grow your wall clock business
          </Text>
        </VStack>

        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)'
          }}
          gap={6}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              className="block p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Link to={service.to}>
                <VStack align="start" spacing={4}>
                  <Box className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </Box>
                  <Heading as="h3" size="md">
                    {service.title}
                  </Heading>
                  <Text color="gray.600">
                    {service.description}
                  </Text>
                </VStack>
              </Link>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 