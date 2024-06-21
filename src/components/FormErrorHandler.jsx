import React from 'react'
import { Text } from '@chakra-ui/react';

const FormErrorHandler = ({errors}) => {
  return (
    {errors} && <Text color="red.500">{errors}</Text>
  )
}

export default FormErrorHandler