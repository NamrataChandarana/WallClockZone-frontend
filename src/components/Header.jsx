import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link as RouterLink } from "react-router-dom";
import "./style/style.css";
import { logout } from "../redux/actions/user";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Box, Button, Flex, useDisclosure, Text, Link, SkeletonCircle, Stack} from '@chakra-ui/react';
import Avtar from "./Avtar";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import TopHeader from "./TopHeader";
import { FaAlignJustify } from "react-icons/fa";

function Header() {
  const { isAuthenticated, loading,  user } = useSelector((state) => state.user);
  const { isOpen, onToggle } = useDisclosure();
  
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
 

  return (
    <>  
      <TopHeader/>
      <Box as="header" bg="white" color="black" fontSize='md' fontFamily={"font-family: inter"}  paddingX={{base:"5", md:"20"}} paddingY="2" >
        <Link as={RouterLink} to="/" display="flex" fontWeight={"medium"} className="no-underline">
          <Text fontSize="xl"  color="black" textAlign={"center"} className="font-bold no-underline">Wall Clock Zone</Text>
        </Link>
        <Flex alignitems="center" gap="1" mb="2" verticalAlign={"top"}>
          <Flex display={{ base: 'none', md: 'flex' }} gap="5" fontSize="lg" fontWeight="semibold" rounded="sm" color="gray.600" mt="6">
            <Link as={RouterLink} to={'/'}  _hover={{color:"#1f1f22"}} >Home</Link>
            <Link as={RouterLink} to={'/about'} _hover={{color:"#1f1f22"}}>About</Link>
            <Link as={RouterLink} to={'/category'} _hover={{color:"#1f1f22"}} >Categories</Link>
            <Link as={RouterLink} to={'/chat'} _hover={{color:"#1f1f22"}} >Messages</Link>
          </Flex>
          
        
          {
            isAuthenticated ? (
              <>
                {
                  loading ? <SkeletonCircle size='10' mt="2" ml="4"/> : (
                    <>
                      <Menu >
                        <MenuButton mt="3">
                        { user && <Avtar name={`${user.firstname} ${user.lastname}`} />}
                        </MenuButton>
                        <MenuList color={"black"} zIndex="999">
                          {
                            user && user.role === "admin" ? null :
                            <>
                              <Link as={RouterLink} to={user && user.isRegister ? '/register/profile' : '/profile'} style={{textDecoration:"none"}}>
                                <MenuItem >Profile</MenuItem>
                              </Link>
                              <Link as={RouterLink} to={user && user.isRegister ? '/updateprofile' : '/editprofile'} style={{textDecoration:"none"}} >
                                <MenuItem>Edit Profile</MenuItem>
                              </Link>
                            </>
                          }
                          <Link as={RouterLink} to={'/chat'} style={{textDecoration:"none"}} display={{ base: 'flex', md: 'none' }}>
                            <MenuItem>Message</MenuItem>
                          </Link>
                          <Link as={RouterLink} to={'/category'} _hover={{color:"#1f1f22"}} display={{ base: 'flex', md: 'none' }}><MenuItem>Categories</MenuItem></Link>
                          <Link as={RouterLink} to={'/about'} _hover={{color:"#1f1f22"}} display={{ base: 'flex', md: 'none' }}><MenuItem>About</MenuItem></Link>
                          {user && (user.role === 'admin') ?
                          <Link as={RouterLink} to={'/admin/dashboard'} style={{textDecoration:"none"}}>
                            <MenuItem>Dashboard</MenuItem>
                          </Link>: null}
                          <Button onClick={logoutHandler} width={"full"} backgroundColor={"white"} paddingX="0">
                            <MenuItem  _hover={{backgroundColor:"gray.200"}}>Logout</MenuItem>
                          </Button>
                        </MenuList>
                      </Menu>
                    </>
                  )}
                 <Flex alignitems="center" gap="2" display={{ base: 'none', md: 'flex' }} width="full" mt="4" ml="1">
                  {(!user?.isRegister) && (
                      <Link as={RouterLink} to={'/register'} style={{textDecoration:"none"}} >
                        <Text px="4" py='2' color="white" fontSize="lg" rounded="md" className="bg-darkbg">Register &rarr;</Text>
                      </Link>
                    )}
                  </Flex>
              </>
            ) :  (
              <>
                <Flex alignitems="center" gap="2" display={{ base: 'none', md: 'flex' }} width="full" mt="4" ml="1">
                  <Link as={RouterLink} to={'/login'} style={{textDecoration:"none"}} >
                    <Text  px='4' rounded="md" py='2' fontSize="lg"  fontWeight={"semibold"} _hover={{color:"#18181B", bg: "gray.100", py:'2'}} color="gray.600" >Signin</Text>
                  </Link>
                  {(!user?.isRegister) && (
                      <Link as={RouterLink} to={'/register'} style={{textDecoration:"none"}} >
                        <Text px="4" py='2' color="white" fontSize="lg" rounded="md" className="bg-darkbg">Register &rarr;</Text>
                      </Link>
                    )} 
                </Flex>           
                <Menu >
                  <MenuButton mt="3" display={{base:"flex", md:"none"}}>
                    <FaAlignJustify  />
                  </MenuButton>
                  <MenuList color={"black"} zIndex="999">
                    <Link as={RouterLink} to={'/'} _hover={{color:"#1f1f22"}} display={{ base: 'flex', md: 'none' }}><MenuItem>Home</MenuItem></Link>
                    <Link as={RouterLink} to={'/category'} _hover={{color:"#1f1f22"}} display={{ base: 'flex', md: 'none' }}><MenuItem>Categories</MenuItem></Link>
                    <Link as={RouterLink} to={'/chat'} style={{textDecoration:"none"}} display={{ base: 'flex', md: 'none' }}>
                      <MenuItem>Message</MenuItem>
                    </Link>
                    <Link as={RouterLink} to={'/about'} _hover={{color:"#1f1f22"}} display={{ base: 'flex', md: 'none' }}><MenuItem>About</MenuItem></Link>
                      <Link as={RouterLink} to={'/login'} style={{textDecoration:"none"}} >
                        <Text  px='4' rounded="md" py='2' fontSize="lg"  fontWeight={"semibold"} _hover={{color:"#18181B", bg: "gray.100", py:'2'}} color="gray.600" >Signin</Text>
                      </Link>
                      {(!user?.isRegister) && (
                          <Link as={RouterLink} to={'/register'} style={{textDecoration:"none"}} >
                            <Text px="4" py='2' color="white" fontSize="lg" rounded="md" className="bg-darkbg">Register &rarr;</Text>
                          </Link>
                        )}       

                  </MenuList>
                </Menu>
              </>
            )}
        </Flex>
      </Box>
    </>
  );
}

export default Header;
