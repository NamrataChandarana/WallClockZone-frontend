import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/actions/admin';
import { Box, Flex,Text } from '@chakra-ui/react';
import { Tfoot, Tr, Th, Td,Thead, TableContainer, TableCaption, Table, Tbody} from '@chakra-ui/react';
import { useSelector } from "react-redux";
import { useState } from 'react';
import { admingetapprovedUser } from '../../redux/actions/admin';
import AdminAction from './AdminAction';

function FetchUser () {
    const dispatch = useDispatch();
    // const [keyword] = useState("");
    const { users, isAuthenticated, message } = useSelector((state) => state.admin);

    function handleDelete(userKey){
      const res = dispatch(deleteUser(userKey))
    }

    useEffect(() => {
      dispatch(admingetapprovedUser());
    }, [users, message]);

    return (
      <>
        <Box>
          <TableContainer boxSize={{base:"3xs", md:"lg", xl:"auto" }}>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>User Name</Th>
                  <Th>Company Name</Th>
                  <Th isNumeric>Mobile No</Th>
                  <Th>Category</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  users.map((user)=>(
                    <Tr>
                      <Td>{user.firstname + " " + user.lastname}</Td>
                      <Td>{user.companyname}</Td>
                      <Td isNumeric>{user.phoneNo}</Td>
                      <Td>{user.category}</Td>
                      <Td>{(user.status) ? 
                        <Text py="2" px="2" color="white" textAlign="center" bg="green.500" rounded="full" cursor="pointer" fontSize="sm">Approved</Text>:
                        <Text py="2" px="2" color="white" bg="red.500" cursor="pointer"  rounded="full" fontSize="sm">Not Approved</Text> }
                      </Td> 
                      <Td>
                        <AdminAction id={user._id} status={user.status}/>
                      </Td>
                      
                    </Tr>
                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </>
    );
};

export default FetchUser