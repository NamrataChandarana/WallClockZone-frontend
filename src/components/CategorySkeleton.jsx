import React from 'react'
import { Box, Container, Grid, SkeletonText, VStack } from "@chakra-ui/react";
import { useSelector } from 'react-redux';

const CategorySkeleton = () => {

  const {categories} = useSelector((state) => state.category);
  return (
    <Box>
        <Box className="section-title mt-5">
            <SkeletonText mt='4'mx={"auto"} noOfLines={1} spacing='4' skeletonHeight='3' width={20}/>
        </Box>
    
        <Box className="row container mx-auto my">
            <Box w="full">
             <Container maxW="container.lg" px={{ base: 4, md: 6 }} mr={"100"}>
               <Grid
                 templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                 gap={{ base: 6, lg: 8 }}
               >
                 {categories.map((category) => (
                    <Box
                        className="animate-pulse"
                        m={3}
                        rounded="md"
                        shadow="md"
                        w={{ base: "60", sm: "80" }}
                        h={"auto"}
                        overflow="hidden"

                    >
                        <Box h="48" bg="gray.300" _dark={{ bg: "gray.700" }} roundedTop="md" />
                        <VStack
                          flex="1"
                          px={{ base: 4, sm: 8 }}
                          py={8}
                          spacing={4}
                          bg="gray.50"
                          _dark={{ bg: "gray.800" }}
                        >
                          <Box w="full" h={3} bg="gray.300" _dark={{ bg: "gray.700" }} rounded="md" />
                        </VStack>
                  </Box>
                 ))}
               </Grid>
             </Container>
            </Box>
        </Box>
    </Box>
  )
}

export default CategorySkeleton