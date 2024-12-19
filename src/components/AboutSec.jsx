import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    VStack,
  } from "@chakra-ui/react"
import { Link } from "react-router-dom";
  
 const AboutSec = () => {
    return (
      <Box
        as="section"
        position="relative"
        py={10}
        mb="10"
        overflow="hidden"
        bgGradient="linear(to-b, gray.50, white)"
      >
  
        <Container
          position="relative"
          zIndex={1}
          maxW="container.lg"
          px={4}
        >
          <VStack
            spacing={6}
            maxW="3xl"
            mx="auto"
            textAlign="center"
          >
            <Heading as="h2" fontSize={{ base: '4xl', md: '4xl' }} fontWeight="semibold" fontFamily="Inter" >
              About Us
            </Heading>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
            >
              Bringing the Wall Clock industry together: Connecting Businesses, Suppliers, and Buyers. 
              Our platform bridges the gap in the wall clock industry by providing a centralized marketplace 
              for all stakeholders.
            </Text>
          <Button
            size="lg"
            height="45px"
            px={6}
            fontSize="lg"
            bgColor={"#18181B"}
            color={'white'}
            _hover={{ bg: "#18181B"}}
          >
            <Link to="/register" className='hover:text-white'>
                 Learn More
            </Link>
            
          </Button>
          </VStack>
        </Container>
      </Box>
    )
  }

  export default AboutSec;