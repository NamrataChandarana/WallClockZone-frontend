import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const SubHeading = ({title, subTitle}) => {
  return (
    <>
        <Box bg="#181818" color="white" fontFamily={"font-family: Open Sans"} paddingY="4"  >
            <Text as={"span"} display="flex" justifyContent="center" fontSize="4xl" fontWeight="xs" >{title}</Text>
            <Text as={"span"} display="flex" justifyContent="center" fontSize="lg" fontWeight="xs">{subTitle}</Text>
        </Box>
    </>
  )
}

export default SubHeading