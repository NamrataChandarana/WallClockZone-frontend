import { Box, Container, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import {  FaLayerGroup, FaClock, FaBusAlt } from "react-icons/fa";
import Title from "./Title";
import {  MdBusiness, MdTransform } from "react-icons/md";
function Service() {
    const services = [
        {
            icon:  MdBusiness,
            title: "Manufactures",
            description: "wall clock manufacturers.Here, you can connect with top suppliers and reach new customers worldwide. Join us to innovate, expand, and lead in the wall clock industry!",
        },
        {
            icon: FaClock,
            title: "Wholesalers",
            description: "Discover the ultimate network for wall clock wholesalers, offering access to diverse products and reliable suppliers to boost your business.",
        },
        {
            icon: MdTransform,
            title: "Designer",
            description: "Showcase your creativity and connect with manufacturers and buyers as a premier wall clock designer on our platform.",
        },
        {
            icon: FaLayerGroup,
            title: "Row Material Dealers",
            description: "Connect with top manufacturers and expand your business as a leading raw material dealer in the wall clock industry.",
        },
        {
            icon: FaBusAlt,
            title: "Transpoters",
            description: "Join our network to offer your transportation services and connect with wall clock manufacturers and wholesalers needing reliable logistics.",
        },
      ];
  return (
    <Box id="services" bg="gray.50" py={10}>
        <Container maxW="container.xl">
            <Box textAlign="center" mb={10}>
             <Title title="Service"/>
            </Box>
            <Flex wrap="wrap" justify="center">
              {services.map((service, index) => (
                <Flex
                  direction="column"
                  key={index}
                  align="center"
                  bg="white"
                  p={5}
                  m={2}
                  shadow="lg"
                  borderRadius="md"
                  textAlign="center"
                  maxW="300px"
                  flex="1 1 300px"
                  _hover={{ textDecoration: "none", bg:"gray.100", transform: "" }}
                >
                    <Icon as={service.icon} boxSize={12} color="#00A9DA" />
                    <Heading as="h4" size="md" mt={4}>
                      <Box as="a" href="/" _hover={{ textDecoration: "none", }}>
                        {service.title}
                      </Box>
                    </Heading>
                    <Text mt={2} fontSize=".9rem" color="gray.500" textAlign="center">{service.description}</Text>
                </Flex>
            ))}
          </Flex>
        </Container>
    </Box>
  )
}

export default Service