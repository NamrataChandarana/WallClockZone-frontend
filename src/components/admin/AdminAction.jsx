import React from 'react'
import { Flex, Button, Link } from '@chakra-ui/react'
import { deleteUser, updateUserStatus } from '../../redux/actions/admin'
import { useDispatch } from 'react-redux'
import AlertDialogComp from './AlertDialog'
import { accessChatUser } from '../../redux/actions/chat'
import {toast} from 'sonner'
import { Link as RouterLink } from 'react-router-dom'

const AdminAction = ({id, status}) => {

  const dispatch = useDispatch();


  function handleDelete(){
    dispatch(deleteUser(id))
  }

  function handleApprove(){
    dispatch(updateUserStatus(id))
  }

  function accessChat(id){
    try{
        dispatch(accessChatUser(id));
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

  return (
    <>
        <Flex gap="2" pt="5">
          <Link as={RouterLink} to={'/chat'} >
            <Button bg="blue.500" size="sm" color="white" _hover={{bg:"blue.600"}} rounded="md" p="5" onClick={() => { accessChat(id)}}>Message</Button>
          </Link>
          <AlertDialogComp label={status ? "Disapprove" : "Approve" } onClickFunc={() => handleApprove()} color="green.500" />
          <AlertDialogComp label="Delete" onClickFunc={() => handleDelete()} color="red.500" />
        </Flex>
    </>
  )
}

export default AdminAction