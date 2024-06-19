import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "../redux/actions/user";
import { Box } from "@chakra-ui/layout";
import MyChats from "../components/chat/MyChats";
import ChatBox from "../components/chat/ChatBox";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import SubHeading from "../components/SubHeading";

function Chat() {
  const { user } = useSelector((state) => state.user);
  const [selectedData, setSelectedData] = useState();
  const selectedChat = useSelector((state)=> state?.chat?.chatData) 
  const dispatch = useDispatch();
  const isAuthenticate = Cookies.get('token');
  const navigate = useNavigate();

  useEffect(()=>{
    if(selectedChat) setSelectedData(selectedChat);
  },[selectedChat])

  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [dispatch]);

  // useEffect(()=> {
  //   if(!isAuthenticate){
  //     navigate('/login')
  //     return
  //   }
  // },[isAuthenticate])
 
  return (
    <>
      <SubHeading title="Wall Clock Zone" subTitle="Messages "/>
      <Box style={{width: "100%"}}>
        <Box
            p="20px"
            w={{ base: "100%", md: "100%" }}
            h="95vh"
            bgColor={"gray.50"}
            display="flex"
            justifyContent="space-between"
          >
            {user && <MyChats selectedData={selectedData} setSelectedData={setSelectedData}/>}
            {user && <ChatBox selectedData={selectedData} setSelectedData={setSelectedData}/>}
        </Box>
      </Box>
    </>
  );
}

export default Chat;
