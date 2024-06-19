import { useState } from 'react';
import { Box } from "@chakra-ui/layout";
import { Text } from '@chakra-ui/layout';
import SideBar from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchChatUser } from '../../redux/actions/chat';
import { Stack } from '@chakra-ui/layout';
import { getSender } from './ChatLogic';
import {toast } from 'sonner';
import { accessChatUser } from '../../redux/actions/chat';
import ChatLoading from './ChatLoading';
const MyChats = ({selectedData , setSelectedData}) => {

  const [selectedChat, setSelectedChat] = useState(null)
  const [loadingChat , setLoadingChat] = useState(false)
  const loggedUser = useSelector((state) => state?.user)
  const selecteddata = useSelector(state => state?.chat?.Messages);
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.chat);
  console.log(user);

  function fetchChat(){
    dispatch(fetchChatUser());
  }

  useEffect(()=>{
    fetchChat();
  },[dispatch, selecteddata])
  
  function accessChat(userId){
    try{
        setLoadingChat(true)
        dispatch(accessChatUser(userId));
        setLoadingChat(false)
    }catch (error) {
    toast({ title: "Error fetching the chat" });
    }
  }
 
  return (
    <>
    <Box
      display={{ base: selectedData ? "none" : "flex", md: "flex" }}
      alignItems="center"
      flexDir="column"
      py={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        d="flex"
        w="100%"
        alignItems="center"
        display="flex"
      >
          <SideBar />
          My Chats
        </Box> 
        <Box
        d="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {user ? (
          <Stack overflowY="scroll">
            {user?.map((chat) => (
              <Box
                onClick={() => {
                  loggedUser?.user?._id !== chat?.users[1]?._id ? (
                    accessChat(chat?.users[1]?._id)
                  ) : (
                    accessChat(chat?.users[0]?._id)
                  ) 
                  setSelectedData(chat)
                }}
                _hover={{
                  background: "#38B2AC",
                  color: "white",
                }}
                cursor="pointer"
                bg="#E8E8E8"
                color= "black"
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
              >
                <Text>
                  {!chat.isGroupChat
                    ? getSender(loggedUser?.user, chat.users)
                    : chat.chatName}
                </Text>
                {chat.latestMessage && (
                  <Text fontSize="xs" >
                    <b>{chat?.latestMessage?.sender?.firstname  }  </b>
                    {chat.latestMessage.content.length > 50
                      ? chat.latestMessage.content.substring(0, 51) + "..." :  chat.latestMessage.content}

                  </Text>
                )} 
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
     
    </Box>  
      
    </>
  )
}

export default MyChats