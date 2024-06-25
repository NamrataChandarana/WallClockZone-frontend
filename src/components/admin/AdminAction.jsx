import React from 'react'
import { Flex } from '@chakra-ui/react'
import { deleteUser, updateUserStatus } from '../../redux/actions/admin'
import { useDispatch } from 'react-redux'
import AlertDialogComp from './AlertDialog'

const AdminAction = ({id, status}) => {

  const dispatch = useDispatch();


  function handleDelete(){
    dispatch(deleteUser(id))
  }
  function handleApprove(){
    dispatch(updateUserStatus(id))
  }
  return (
    <>
        <Flex gap="2" pt="5">
        {/* <Button bg="blue.500" size="sm" color="white" _hover={{bg:"blue.600"}} rounded="xs">Message</Button> */}
          <AlertDialogComp label={status ? "Disapprove" : "Approve" } onClickFunc={() => handleApprove()} color="green.500" />
          <AlertDialogComp label="Delete" onClickFunc={() => handleDelete()} color="red.500" />
        </Flex>
    </>
  )
}

export default AdminAction