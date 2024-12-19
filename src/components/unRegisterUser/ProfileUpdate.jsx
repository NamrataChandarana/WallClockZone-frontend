import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Input, } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { UserProfileUpdate } from '../../redux/actions/user';
import Header from '../Header';
import SubHeading from '../SubHeading';
import Title from '../Title';
import Footer from '../Footer';

const ProfileUpdate = () => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const [inputs , setInputs] = useState({
      name: user?.name || '',
      email: user?.email || '',
      password: user?.password || ''
    })
    
    const handleSubmit = async(e) => {
        if (!inputs.name || !inputs.email || !inputs.password ) {
          toast.error("Please fill all the required fields", { position: "top-center", className: "max-w-fit" });
          return;
        }
        if (!/\S+@\S+\.\S+/.test(inputs.email)) {
            toast.error("Please enter a valid email address", { position: "top-center", className: "max-w-fit" });
            return;
        }
         e.preventDefault();
        const res = await dispatch(
          UserProfileUpdate(
            inputs.name,
            inputs.email,
            inputs.password
          )
        );
        if(res) navigate('/profile')
    };

  return (
   <>   
      <Header />
      <SubHeading title="Wall Clock Zone" subTitle="Edit Profile"/>
      <Title title="Edit Profile"/>
      <Box display="flex"  justifyContent="center" px={{ base: 6, xl: 10 }} mb="10" >
        <Box mx="auto" w="350px" p={5} borderWidth="1px" borderRadius="md" borderColor="gray.200">
          <Box as="form" spacing={4} pt={5}>
            <FormControl>
              <FormLabel htmlFor="email">Name</FormLabel>
              <Input
                id="name"
                type="text"
                onChange={(e) => setInputs({...inputs, name:e.target.value})} 
                value={inputs?.name}
              />

            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="text"
                onChange={(e) => setInputs({...inputs, email:e.target.value})} 
                value={inputs?.email} 
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
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
   </>
  )
}

export default ProfileUpdate;