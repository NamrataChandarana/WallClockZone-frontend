import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link as RouterLink } from "react-router-dom";
import "./style/style.css";
import { logout } from "../redux/actions/user";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Box, Button, Flex, Stack, useDisclosure, Text, Spacer, Link, Spinner } from '@chakra-ui/react';
import { FaAlignJustify } from "react-icons/fa";
import Avtar from "./Avtar";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import TopHeader from "./TopHeader";

function Header() {
  const { isAuthenticated, loading, user } = useSelector((state) => state.user);
  const { isOpen, onToggle } = useDisclosure();
  
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
 
  if(loading){
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <>  
      <Box bg="#181818" color="white" fontSize="14" paddingY="1.5" paddingX="20" width={"full"}>
        <Flex>
          <TopHeader/>
          <Spacer />
          <Box display={{base:"none", md:"flex"}} >
            <Link as={RouterLink} to="/register" _hover={"color: #00A9DA"} letterSpacing="-2%">Create Account</Link>
          </Box>
        </Flex>   
      </Box>
      <Box as="header" bg="white" color="black" fontSize='md' fontFamily={"font-family: Open Sans"} letterSpacing='.8px' paddingX={{base:"5", md:"20"}} mb={"0"} >
        <Link as={RouterLink} to="/" display="flex" alignitems="center" fontWeight={"medium"}>
          <Text fontSize="xl"  color="black" textAlign={"center"}>Wall Clock <br /> Zone</Text>
        </Link>
        <Flex alignitems="center" gap="1" >
          <Flex display={{ base: 'none', md: 'flex' }} gap="5" fontSize="lg" fontWeight="sm" rounded="sm"  color="gray.900" mt="5">
            <Link as={RouterLink} to={'/'}  _hover={{color:"#00A9DA"}} >Home</Link>
            <Link as={RouterLink} to={'/about'} _hover={{color:"#00A9DA"}}>About</Link>
            <Link as={RouterLink} to={'/category'} _hover={{color:"#00A9DA"}} >Categories</Link>
          </Flex>
          {
            isAuthenticated ? 
            <Menu >
              <MenuButton mt="3">
                {user && <Avtar name={`${user.firstname} ${user.lastname}`}/>}
              </MenuButton>
              <MenuList color={"black"} zIndex="999">
                {
                  user && user.role === "admin" ? null :
                  <>
                    <Link as={RouterLink} to={'/profile'} style={{textDecoration:"none"}}>
                      <MenuItem >Profile</MenuItem>
                    </Link>
                    <Link as={RouterLink} to={'/updateprofile'} style={{textDecoration:"none"}} >
                      <MenuItem>Edit Profile</MenuItem>
                    </Link>
                  </>
                }
                <Link as={RouterLink} to={'/chat'} style={{textDecoration:"none"}}>
                  <MenuItem>Message</MenuItem>
                </Link>
                {user && (user.role === 'admin') ?
                <Link as={RouterLink} to={'/admin/dashboard'} style={{textDecoration:"none"}}>
                  <MenuItem>Dashboard</MenuItem>
                </Link>: null}
                <Button onClick={logoutHandler} width={"full"} backgroundColor={"white"} >
                  <MenuItem  _hover={{backgroundColor:"gray.200"}}>Logout</MenuItem>
                </Button>
              </MenuList>
            </Menu>
            :
            <Flex alignitems="center" gap="2" display={{ base: 'none', md: 'flex' }} width="full" mt="4" ml="1">
              <Link as={RouterLink} to={'/login'} style={{textDecoration:"none"}} >
                <Text  px='4' rounded="md" py='2'  _hover={{color:"#00A9DA", bg: "gray.100", py:'2'}} color="gray.900" >Signin</Text>
              </Link>
              <Link as={RouterLink} to={'/register'} style={{textDecoration:"none"}} >
                <Text px="4" py='2' color="white" rounded="md" bg="#00A9DA" >Register &rarr;</Text>
              </Link>
            </Flex>
          }
            <Button variant="ghost" size="icon" rounded="full" display={{ base: 'flex', md: 'none' }} onClick={onToggle} >
              <FaAlignJustify />
            </Button>
        </Flex>
        {isOpen && (
          <Box position="absolute" top="36" left="0" width="full" bg="white" p="4" shadow="lg" zIndex={10} display={{ base: 'block', md: 'none' }} textAlign="center" className="transition: { exit: { delay: 1 }, enter: { duration: 0.5 } }"  >
            <Stack spacing="4" color={"black"}>
              <Link as={RouterLink} to="/" px="4" py="2" rounded="md" _hover={{ bg: 'gray.100', color: 'gray.900' }} >Home</Link>
              <Link as={RouterLink} to="/about" px="4" py="2" rounded="md" _hover={{ bg: 'gray.100', color: 'gray.900' }}>About</Link>
              <Link as={RouterLink} to="/category" px="4" py="2" rounded="md" _hover={{ bg: 'gray.100', color: 'gray.900' }}>Categories</Link>

              {isAuthenticated ? 
                  (null)
                : 
                (
                  <Stack spacing="2">
                <Button
                  as={Link}
                  variant="outline"
                  px="4"
                  py="2"
                  mt="3"
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
                  as={Link}
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
