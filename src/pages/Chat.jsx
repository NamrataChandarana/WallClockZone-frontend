import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import MyChats from "../components/chat/MyChats";
import ChatBox from "../components/chat/ChatBox";
import { useState } from "react";
import SubHeading from "../components/SubHeading";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Chat() {
  const { user } = useSelector((state) => state.user);
  const [selectedData, setSelectedData] = useState();
  const selectedChat = useSelector((state)=> state?.chat?.chatData) 

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
      <Header />
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
      <Footer />
    </>
  );
}

export default Chat;
