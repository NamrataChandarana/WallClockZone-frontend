import React from 'react'
import { Puff} from 'react-loader-spinner'
import { Box } from "@chakra-ui/react";
import Header from './Header';

const Loader = () => {
  return (
    <>
        <Header/>
        <Box  minH="100vh" width="full" display="flex" alignItems="center" justifyContent="center">
            <Puff
              visible={true}
              height="80"
              width="80"
              color="#00A9DA"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""      
            />
        </Box> 
    </>
    
  )
}

export default Loader