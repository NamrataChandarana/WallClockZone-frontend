import React from 'react'
import { useState } from 'react'
import { Button, Spinner } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Box, Flex } from "@chakra-ui/layout";
import {  fetchMsgUser, sendMsgUser } from '../../redux/actions/chat';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './style.css'
import io from 'socket.io-client'
import ScrollableChat from './ScrollableChat';
import animationData from "../../animation/typing.json";
import { Text } from '@chakra-ui/layout';
import {toast} from 'sonner'
import ChatLoading from './ChatLoading';

const ENDPOINT = "https://wallclockzone.onrender.com";
var socket, selectedChatCompare;


const SingleChat = ({notification, setNotification}) => {

    const [newMessages, setNewMessages] = useState();
    const [socketConnected, setSocketConnected] = useState(false);
    const dispatch = useDispatch(); //selectedUser 
    const seletedChat = useSelector((state)=> state?.chat?.chatData);
    const { user } = useSelector((state) => state.user);
    const [typing, setTyping] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const msgData = useSelector((state)=> state?.chat?.sendMsg);
    const [messages, setMessages] = useState([]);
    const [msgLoading, setMsgLoading] = useState(true);
    
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    
    useEffect(()=>{
      setMessages("")
      socket = io("https://wallclockzone.onrender.com");
      socket.emit("setup",user);
      socket.on("connected", () => setSocketConnected(true))
      // socket.on("typing", ()=> setIsTyping(true))
      // socket.on("stop typing", ()=> setIsTyping(false))
    },[]);

    useEffect(()=>{
      seletedChat && socket.emit("join chat", seletedChat?._id);
    },[seletedChat]);

    //fetchmsg
    const fetchMsg = async(chatId) =>{
      if(!seletedChat) return;
      const msg = await dispatch(fetchMsgUser(chatId));
      setMessages(msg);
    }
    
    useEffect(()=>{
      setMessages("")
      fetchMsg(seletedChat?._id);
      selectedChatCompare = seletedChat;
      setMsgLoading(false);
    },[seletedChat])

    //send msg
    const sendMessage = async(e) => {
       e.preventDefault(); 
      try{
        // socket.emit("stop typing", seletedChat?._id)
        //check SetnewMessage
        if (!newMessages.trim()) return; 
        const selectedChatId = seletedChat?._id;
        const newMsg = {
          sender: {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username
          },
          content: newMessages,
          chat: {
            _id: seletedChat._id,
            chatName: "sender",
            users: [
              {
                _id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
              },
              {
                _id: seletedChat._id,
                firstname: seletedChat.firstname,
                lastname: seletedChat.lastname
              }
            ]
          }
        }
        setMessages([...messages, newMsg])
        setNewMessages(" ");
        dispatch(sendMsgUser(selectedChatId, newMessages));              
      }catch (error) {
        toast({title: "Error Occured!"});
      }    
    };

    useEffect(()=>{
      if(!msgData) return
      socket.emit("new message", msgData);
    },[msgData])
  
    //notification
    useEffect(()=>{
      socket.on("message recieved", (newMessageRecieved) =>{
        if(!selectedChatCompare || selectedChatCompare?._id !== newMessageRecieved.chat._id){

          //give notification
          if (!notification.includes(newMessageRecieved)) {
            // setNotification([newMessageRecieved, ...notification]);
          
          if (notification !== null) {
            if (!notification.some((n) => n.chat._id === newMessageRecieved.chat._id)) {
              setNotification([newMessageRecieved, ...notification]);
            }
          } else {
            setNotification([newMessageRecieved, ...notification]);
          }
        }
      }else{
        setMessages([...messages, newMessageRecieved])
        }
      })
    })
  
    //typing
    useEffect(()=>{
      //typing
      socket.on('typing', (data) => {
        if (data.chatId === seletedChat?._id) {
            setIsTyping(true);
        }
    });

    socket.on('stop typing', (data) => {
        if (data.chatId === seletedChat?._id) {
            setIsTyping(false);
        }
    });
    },[seletedChat])

    const typingHandler = (e) => {
        const msg = e.target.value;
        setNewMessages(msg);
        // Typing indicator
        if(!socketConnected) return;

        if(!typing){
          setTyping(true);
          socket.emit("typing", { userId: user?._id, chatId: seletedChat?._id})
        }

        let lastTypingTime = new Date().getTime();
        var timerLength = 3000;
        setTimeout(()=>{
          var timeNow = new Date().getTime();
          var timeDiff = timeNow - lastTypingTime;

          if(timeDiff >= timerLength && typing){
            socket.emit("stop typing", { userId: user?._id, chatId: seletedChat?._id })
            setTyping(false);
          }
        },timerLength)
    };

    return (
      <>
      {seletedChat ? (
          <>
            <Box
             display="flex"
             flexDir="column"
             justifyContent="flex-end"
             p={3}
             bg="#E8E8E8"
             w="100%"
             h="100%"
             borderRadius="lg"
             overflowY="hidden"
             >
                {/* {loadingChats ? (
                    <Spinner
                    display="flex"
                      size="xl"
                      w={20}
                      h={20}
                      alignSelf="center"
                      margin="auto"
                    />
                    ) : ( */}
                      <div className="messages">
                    {
                      msgLoading ? 
                        <Spinner/>
                        :<ScrollableChat messages={messages} />
                        
                    }
                        
                    {/* message */}
                    {/* {isTyping ?
                        <span>
                          <Lottie 
                            options={defaultOptions}
                            height={50}
                            width={50}
                            style={{ marginBottom: 0, marginLeft: 0 }}
                          />
                        </span>
                        : <>no</>} */}
                      </div>
                {/* )} */}
            </Box>         
            <FormControl
              // onKeyDown={sendMessage}
              id="first-name"
              isRequired
              mt={3}
            >
              <Flex>
              <Input
                    variant="filled"
                    bg="#E0E0E0"
                    placeholder="Enter a message.."
                    value={newMessages}
                    onChange={typingHandler}
                />
                <Button onClick={sendMessage}>send</Button>
                </Flex>
               
            </FormControl>           
          </>

      ) : (
        <>
          <Box d="flex" alignItems="center" justifyContent="center" h="100%">
            <Text fontSize="3xl" pb={3} fontFamily="Work sans">
              Click on a user to start chatting
            </Text>
          </Box>
        </>
      )}
    </>
    )
}

export default SingleChat