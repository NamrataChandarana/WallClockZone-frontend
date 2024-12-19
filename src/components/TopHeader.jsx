import React from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import {  Link } from "react-router-dom";


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
    <>
    <Box bg="#181818" color="white" fontSize="14" paddingY="1.5" paddingX="20" width={"full"}>
      <Flex>
        <Box textAlign={{base:"center" , md:"start"}} fontSize="xs">
            wall clock zone: {names[index]}
        </Box>
        <Spacer />
        <Box display={{base:"none", md:"flex"}} >
          <Link  to="/register" _hover={"color: #00A9DA"} letterSpacing="-2%">Create Account</Link>
        </Box>
      </Flex>
    </Box>
    </>
    
    
  )
}

export default TopHeader