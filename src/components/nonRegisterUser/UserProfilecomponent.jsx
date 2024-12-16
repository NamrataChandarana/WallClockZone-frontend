import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Input, } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import Header from '../Header';
import Title from '../Title';
import SubHeading from '../SubHeading';
import Footer from '../Footer';

const UserProfilecomponent = () => {
    const navigate = useNavigate(); 
    const { user } = useSelector((state) => state.user);
    const [inputs , setInputs] = useState({
      name:'',
      email:'',
      password:''
    })

    useEffect(() => {
      if (user) {
        setInputs({
            name: user.name || '',
            email:user.email || '',
            password:user.password || ''
        });
      }
    }, [user]);

    const handleUpdateClick = () => {
        navigate('/editprofile');
    };

  return (
   <>
      <Header/>
      <SubHeading title="Wall Clock Zone" subTitle="Edit Profile"/>
      <Title title="Edit Profile"/>
      <Box display="flex"  justifyContent="center" px={{ base: 6, xl: 10 }} mb="10" >
        <Box mx="auto" w="350px" p={5} borderWidth="1px" borderRadius="md" borderColor="gray.200">
          <Box as="form" spacing={4} pt={5}>
            <FormControl>
              <FormLabel htmlFor="email">Name</FormLabel>
              <Input
                id="email"
                type="text"
              //   onChange={(e) => setEmail(e.target.value)}
                value={inputs.name}
                readOnly
              />

            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="text"
              //   onChange={(e) => setEmail(e.target.value)}
                value={inputs.email}
                readOnly
              />

            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="********"
              //   onChange={(e) => setPassword(e.target.value)}
                value={"password"}
                readOnly
              />

            </FormControl>
            <Button
              type="submit"
              w="100%"
              bg="#18181B"
              color="white"
              py={2.5}
              my={5}
              _hover={{ bg: "#18181B" }}
              // mx="5%"
              onClick={handleUpdateClick}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
   </>
  )
}

export default UserProfilecomponent;