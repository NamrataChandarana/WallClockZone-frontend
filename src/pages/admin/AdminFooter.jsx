import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const AdminFooter = () => {
  return (
    <Box bg="black" paddingY="1" paddingX="20" textAlign={{base:"center", lg:"start"}}>
        <Text as="span" fontSize="sm" color="gray.300"> 2024 © wall clock zone</Text>
    </Box>
  )
}

export default AdminFooter