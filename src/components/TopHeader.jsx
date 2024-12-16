import React from 'react'
import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';


const TopHeader = () => {
  const [index, setIndex] = useState(0);
  const names = [
    'Manufacturer Details', 'Wholeshaler Details', 'Raw-material-Dealer', 'Designer Details', 'Transpoter Details'
  ];  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((index + 1) % names.length);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [index, names.length]);

  return (
    <Box textAlign={{base:"center" , md:"start"}} fontSize="xs">
        wall clock zone: {names[index]}
    </Box>
  )
}

export default TopHeader