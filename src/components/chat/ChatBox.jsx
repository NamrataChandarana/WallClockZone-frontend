import React from 'react'
import { Box } from "@chakra-ui/layout";
import SingleChat from './SingleChat';
import { useSelector } from 'react-redux';
import { IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Menu ,MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import NotificationBadge from "react-notification-badge";
import Effect from 'react-notification-badge/lib/components/Effect';
import { getSender } from './ChatLogic';
import { useToast } from '@chakra-ui/react';
import { accessChatUser } from '../../redux/actions/chat';
import { useDispatch } from 'react-redux';

const ChatBox = ({ selectedData, setSelectedData }) => {

  const selectedChat = useSelector(state => state?.chat?.chatData?.users);
  const {user} = useSelector(state => state.user);
  const [notification, setNotification]  = useState([]);
  const toast = useToast();
  const [loadingChat, setLoadingChat] = useState(false);
  const dispatch = useDispatch();

  console.log(selectedChat)

  async function accessChat3(userId){
        try{
            setLoadingChat(true)
            dispatch(accessChatUser(userId));
            setLoadingChat(false);
        }catch (error) {
        toast({
            title: "Error fetching the chat",
            description: error.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-ceter",
        });
        }
  };

  return (
  <Box
    display={{ base: selectedData ? "flex" : "none", md: "flex" }}
    flexDir="column"
    alignItems="center"
    p={3}
    bg="white"
    w={{ base: "100%", md: "68%" }}
    borderRadius="lg"
    borderWidth="1px"
  >
      <Box
        display="flex"
        justifyContent="space-between"
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        w="100%"
      >
        <IconButton
          display={{ base: "inline", md: "none" }}
          icon={<ArrowBackIcon />}
          onClick = {() => setSelectedData("")}
          m={2}
        />
        {
          
          selectedChat && selectedChat.length > 1  ? (
            user?._id !== selectedChat[1]?.userId?._id ? (
              selectedChat[1]?.userId?.companyname || selectedChat[1]?.userId?.name
            ) : (
              selectedChat[0]?.userId?.companyname || selectedChat[0]?.userId?.name
            ) 
            )  : "User"
        }
        <Menu>
          <MenuButton p={1}>
            <NotificationBadge
              count={notification.length}
              effect={Effect.SCALE}
            />
            <BellIcon fontSize="2xl" m={1} />
          </MenuButton>
          <MenuList pl={2}>
            {!notification.length && "No New Messages"}
            {notification.map((notif) => (
              <MenuItem
                key={notif?._id}
                onClick={() => {
                  user?._id !== notif?.chat?.users[1]?.userId?._id ? (
                    accessChat3(notif?.chat?.users[1]?.userId?._id)
                  ) : (
                    accessChat3(notif?.chat?.users[0]?.userId?._id)
                  ) 
                  setNotification(notification.filter((n) => n !== notif));
                }}
              >
                {notif?.chat?.isGroupChat
                  ? `New Message in ${notif?.chat?.chatName}`
                  : `New Message from ${getSender(user, notif?.chat?.users)}`}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
      <SingleChat notification={notification} setNotification={setNotification} />
  </Box>
  )
}

export default ChatBox