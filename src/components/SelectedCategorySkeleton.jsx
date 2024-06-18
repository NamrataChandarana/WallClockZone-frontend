import React from 'react'
import { Box, Button, Flex, Heading, Text, VStack, Grid,SkeletonText } from "@chakra-ui/react";

const SelectedCategorySkeleton = () => {
  return (
    <Box>
      <Box className="section-title mt-5">
        <SkeletonText mt='4'mx={"auto"} noOfLines={1} spacing='4' skeletonHeight='3' width={20}/>
      </Box>
      <Box className="row-12 d-flex justify-content-evenly">
        <Box className="row">
          <Box className="col-md-12" >
            <Box w="full" bg="white" rounded="md" shadow="md" _dark={{ bg: "gray.800" }} mb={10}>
              <Flex justify="between" align="center" px={6} >
                <VStack align="start" >
                  <Heading size="xl" fontWeight="bold" lineHeight="tight">
                    <SkeletonText mt='4'mx={"auto"} noOfLines={1} spacing='4' skeletonHeight='3' width={200}/>
                  </Heading>
                  <Text color="gray.500" _dark={{ color: "gray.400" }} mb={1}>
                    <SkeletonText mt='4'mx={"auto"} noOfLines={1} spacing='4' skeletonHeight='3' width={600}/>
                  </Text>
                  <Grid >
                    <Flex  gap={2}>
                      <SkeletonText mt='4' noOfLines={1} spacing='2' skeletonHeight='3' width={220}/>
                    </Flex>
                    <Flex  gap={2}>
                      <SkeletonText mt='4' noOfLines={1} spacing='2' skeletonHeight='3' width={200}/>
                    </Flex>
                    <Flex  gap={2}>
                      <SkeletonText mt='4' noOfLines={1} spacing='2' skeletonHeight='3' width={210}/>
                    </Flex>
                    <Flex  gap={2}>
                      <SkeletonText mt='4' noOfLines={1} spacing='2' skeletonHeight='3' width={260}/>
                    </Flex>
                  </Grid>
                </VStack>
              </Flex>
              <Box px={6} py={4} >
                <Button
                  variant="solid"
                  size="lg"
                  color="white"
                  fontWeight="bold"
                  py={3}
                  px={6}
                  rounded="md"
                  shadow="md"
                  transition="all 0.2s"
                  w="full"
                >
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SelectedCategorySkeleton