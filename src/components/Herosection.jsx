import React from 'react'
import { Button, Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import {MoveRight} from "lucide-react";
import { Link } from 'react-router-dom';

const Herosection = () => {
    return (
        <Box minH="90vh" bg="white" color="gray.800">
          <Box
            as="header"
            position="relative"
            bgGradient="linear(to-r, blue.600, blue.700, blue.800)"
            color="white"
          >
            {/* Background Pattern */}
            <Box
              position="absolute"
              inset="0"
            //   opacity="0.1"
              bgImage="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSI+PC9jaXJjbGU+Cjwvc3ZnPg==')"
            />
    
            {/* Content */}
            <Container
              maxW="container.xl"
              px={4}
              py={{ base: 16, md: 24 }}
              position="relative"
              zIndex={10}
            >
              <Box maxW="4xl" mx="auto" textAlign="center">
                <Heading
                  as="h1"
                  fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                  fontWeight="bold"
                  mb={4}
                  lineHeight="tight"
                >
                  The Hub for{' '}
                  <Text as="span" color="blue.300">
                    Wall Clock
                  </Text>{' '}
                  Industry
                </Heading>
                
                <Text
                  fontSize={{ base: 'sm', md: '2xl' }}
                  mb={8}
                  lineHeight="relaxed"
                >
                  Join the largest marketplace for wall clock manufacturers, wholesalers, and suppliers.
                </Text>
    
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  spacing={4}
                  justify="center"
                  mb={12}
                >
                  <Button
                    size="md"
                    fontSize="lg"
                    bgColor={"#18181B"}
                    color={"white"}
                    rightIcon={<MoveRight className="ml-1 h-5 w-5" />}
                    width={{ base: 'full', sm: 'auto' }}
                    className='py-3 px-4 bg-darkbg'
                    _hover ={{ bgColor: "bg-darkbg"}}
                  >
                    <Link to="/register" className='text-white'>
                      Register Now
                    </Link>
                    
                  </Button>
                  <Button
                    size="md"
                    fontSize="lg"
                    bg="none"
                    border="1px solid white"
                    color="white"
                    _hover={{ bg: 'white' }}
                    // rightIcon={<ShoppingBag className="ml-2 h-4 w-5" />}
                    width={{ base: 'full', sm: 'auto' }}
                     className='py-3 px-4 bg-darkbg hover:text-darkbg'
                  >
                    <Link to="/about" className='hover:text-darkbg'>
                      Learn More
                    </Link>
                  </Button>
                </Stack>
              </Box>
            </Container>
          </Box>
        </Box>
      )
}

export default Herosection