import React from 'react'
import { Box, MenuButton, MenuItem, MenuList, Button, Flex} from "@chakra-ui/react";
import { FaAngleDown} from "react-icons/fa";
import { Link } from "react-router-dom";
import {Menu} from '@chakra-ui/react';
import { useDispatch } from "react-redux";
import { logout } from '../../redux/actions/user';
import TopHeader from '../../components/TopHeader';

const AdminHeader = () => {

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Box bg="black" color="white" fontSize="14" paddingY="1.5" paddingX="10" width={"full"} >
        <Box display="flex" justifyContent="space-between" >
            <TopHeader/>
            <Menu>
              <MenuButton >
              <Box
                  as="div"
                  bg="#00A9DA"
                  borderRadius="sm"
                  id="dropdownUserAvatarButton"
                  data-dropdown-toggle="dropdownAvatar"
                  px={3}
                  py={1}
                  ml="4"
                  color="white"
                >
                  <Flex gap="2">
                    <Box as="span" fontWeight="medium" color="white">
                      Admin 
                    </Box>
                    <Box pt="1">
                      <FaAngleDown />
                    </Box>
                  </Flex>
                </Box>
              </MenuButton>
              <MenuList color={"black"} >
                <Link to={'/'}>
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link to={'/chat'}>
                  <MenuItem>Change password</MenuItem>
                </Link>
                <Link to={'/admin/dashboard'}>
                  <MenuItem>Dashboard</MenuItem>
                </Link>
                <Button onClick={logoutHandler} width={"full"} backgroundColor={"white"} _hover={{backgroundColor:"gray.200", color: "#73C5EB"}} >
                  <MenuItem  _hover={{backgroundColor:"gray.200"}}>Logout</MenuItem>
                </Button>
              </MenuList>
            </Menu>
        </Box>
    </Box>
  )
}

export default AdminHeader