import React from 'react'
import { useState } from 'react';
import { Box } from "@chakra-ui/layout";
import { Button, Tooltip, useToast } from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import ChatLoading from './ChatLoading';
import UserListItem from './userAvatar/UserListItem';
import { useDispatch, useSelector } from 'react-redux';
import { accessChatUser, searchChatUser } from "../../redux/actions/chat";
import { Spinner } from '@chakra-ui/react';


const SideBar = () => {

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearch = (e) =>{
    e.preventDefault();
    setLoading(true)
    dispatch(searchChatUser(search));   
    setLoading(false)
  }

  const data = useSelector((state) => state.chat.users)
  console.log(data)

  
    // const selecteddata = useSelector(state => state?.chat?.chatData?.users);
    // const selecteduser = useSelector(state => state?.chat?.chatData);
  
  return (
    <Box >
        <Box pr={2}>
            <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
              <Button variant="ghost" onClick={onOpen}>
                  <i className="fas fa-search"></i>
              </Button>
            </Tooltip>
        </Box>
        <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search User</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={1}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {
         loading ? (
            <ChatLoading />
          ) : (
           data && data.map((user) => (
                <UserListItem
                  key={user?._id}
                  user={user}
                />
              ))
            )}
            {loadingChat && <Spinner ml="auto" d="flex" size="xl" />}
            </DrawerBody>
        </DrawerContent>
      </Drawer>
      
     
    </Box>
    
  )
}

export default SideBar