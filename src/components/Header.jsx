import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link as RouterLink } from "react-router-dom";
import "./style/style.css";
import { logout } from "../redux/actions/user";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Box, Button, Flex, Stack, useDisclosure, Text, Spacer } from '@chakra-ui/react';
import { FaAlignJustify } from "react-icons/fa";
import Avtar from "./Avtar";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { useState } from "react";
import TopHeader from "./TopHeader";

function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isOpen, onToggle } = useDisclosure();
  
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
 

  return (
    <>  
      <Box bg="#181818" color="white" fontSize="14" paddingY="1.5" paddingX="20" width={"full"}>
        <Flex>
          <TopHeader/>
          <Spacer />
          <Box display={{base:"none", md:"flex"}} >
            <RouterLink to="/register" _hover={"color: #00A9DA"} letterSpacing="-2%">Create Account</RouterLink>
          </Box>
        </Flex>   
      </Box>
      <Box as="header" bg="white" color="black" fontSize='md' fontFamily={"font-family: Open Sans"} letterSpacing='.8px' paddingX={{base:"5", md:"20"}} mb={"0"} >
        <RouterLink to="/" display="flex" alignItems="center" fontWeight={"medium"}>
          <Text fontSize="xl"  color="black" textAlign={"center"}>Wall Clock <br /> Zone</Text>
        </RouterLink>
        <Flex alignItems="center" gap="1">
          <Flex display={{ base: 'none', md: 'flex' }} gap="5" fontSize="md" fontWeight="sm" rounded="sm"  color="gray.900">
            <RouterLink to={'/'}  _hover={{color:"#00A9DA"}}>Home</RouterLink>
            <RouterLink to={'/about'} _hover={{color:"#00A9DA"}}>About</RouterLink>
            <RouterLink to={'/category'} _hover={{color:"#00A9DA"}} >Categories</RouterLink>
          </Flex>
          {
            isAuthenticated ? 
            <Menu>
              <MenuButton >
                {user && <Avtar name={`${user.firstname} ${user.lastname}`}/>}
              </MenuButton>
              <MenuList color={"black"} >
                <RouterLink to={'/profile'}>
                  <MenuItem>Profile</MenuItem>
                </RouterLink>
                <RouterLink to={'/updateprofile'}>
                  <MenuItem>Edit Profile</MenuItem>
                </RouterLink>
                <RouterLink to={'/chat'}>
                  <MenuItem>Message</MenuItem>
                </RouterLink>
                {(user.role === 'admin') ?
                <RouterLink to={'/admin/dashboard'}>
                  <MenuItem>Dashboard</MenuItem>
                </RouterLink>: null}
                <Button onClick={logoutHandler} width={"full"} backgroundColor={"white"} _hover={{backgroundColor:"gray.200", color: "#73C5EB"}} >
                  <MenuItem  _hover={{backgroundColor:"gray.200"}}>Logout</MenuItem>
                </Button>
              </MenuList>
            </Menu>
            :
            <Flex alignItems="center" gap="2" display={{ base: 'none', md: 'flex' }} width="full" mt="4" ml="1">
              <RouterLink to={'/login'}>
                <Text  px='4' rounded="md"  _hover={{color:"#00A9DA", bg: "gray.100", py:'2'} } color="gray.900" >Signin</Text>
              </RouterLink>
              <RouterLink to={'/register'}>
                <Text px="4" py='2' color="white" rounded="md" bg="#00A9DA" >Register &rarr;</Text>
              </RouterLink>
            </Flex>
          }
            <Button variant="ghost" size="icon" rounded="full" display={{ base: 'flex', md: 'none' }} onClick={onToggle} >
              <FaAlignJustify />
            </Button>
        </Flex>
        {isOpen && (
          <Box position="absolute" top="36" left="0" width="full" bg="white" p="4" shadow="lg" zIndex={10} display={{ base: 'block', md: 'none' }} textAlign="center" className="transition: { exit: { delay: 1 }, enter: { duration: 0.5 } }"  >
            <Stack spacing="4" color={"black"}>
              <RouterLink to="/" px="4" py="2" rounded="md" _hover={{ bg: 'gray.100', color: 'gray.900' }} >Home</RouterLink>
              <RouterLink to="/about" px="4" py="2" rounded="md" _hover={{ bg: 'gray.100', color: 'gray.900' }}>About</RouterLink>
              <RouterLink to="/category" px="4" py="2" rounded="md" _hover={{ bg: 'gray.100', color: 'gray.900' }}>Categories</RouterLink>

              {isAuthenticated ? 
                  (null)
                : 
                (
                  <Stack spacing="2">
                <Button
                  as={RouterLink}
                  variant="outline"
                  px="4"
                  py="2"
                  fontSize="sm"
                  fontWeight="medium"
                  color="#00A9DA"
                  bg= 'gray.100'
                  _hover={{ bg: 'gray.100' }}
                  to='/login'
                >
                  Sign In
                </Button>
                <Button
                  as={RouterLink}
                  to="/register"
                  variant="outline"
                  px="4"
                  py="2"
                  fontSize="sm"
                  fontWeight="medium"
                  color="white" 
                  bg="#00A9DA"
                  _hover={{ bg: '#00A9DA', opacity: '0.9' }}
                >
                  Register
                </Button>
              </Stack>
                )
              } 
            </Stack>
          </Box>
        )}
      </Box>
    </>


  );
}

export default Header;
