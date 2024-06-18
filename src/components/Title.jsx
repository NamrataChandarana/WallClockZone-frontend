import React from 'react'
import { Box } from '@chakra-ui/react'
import '../components/style/style.css'

const Title = ({title}) => {
  return (
    <Box className="section-title " mt={10} fontFamily="Inter" paddingBottom={"0"}>
        <Box as="h2">
          {title}
        </Box>
    </Box>
  )
}

export default Title