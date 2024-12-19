import { Box, Text } from "@chakra-ui/layout";
import { accessChatUser } from "../../../redux/actions/chat";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const UserListItem = ({user}) => {
  console.log(user?._id)
  const [loadingChat, setLoadingChat] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();

  function accessChat(userId){
    try{
        setLoadingChat(true)
        dispatch(accessChatUser(userId));
        setLoadingChat(false)
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
  }
const data = useSelector((state) => state?.chat?.chatData)
console.log(data)

  return (
    <Box
      onClick={() => accessChat(user?._id)}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      {/* <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      /> */}
      <Box>
        <Text>{user.companyname}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;