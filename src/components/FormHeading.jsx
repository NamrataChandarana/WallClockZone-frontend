import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react';

const FormHeading = ({heading, subHeading}) => {
  return (
    <Box textAlign={"left" } mb={6} fontFamily={"font-family: Open Sans"}>
      <Heading as="h2" size="md" mb={1} fontSize={{sm:"23px", base: "18px"}} fontWeight="sm">{heading}</Heading>
      <Text color="gray.500" _dark={{ color: "gray.400" }} fontSize={{base:"sm", sm:'md'}}>
        {subHeading}
      </Text>
    </Box>
  )
}

export default FormHeading