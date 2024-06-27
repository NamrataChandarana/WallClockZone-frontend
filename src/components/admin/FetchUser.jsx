import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';
import { Tr, Th, Td,Thead, TableContainer, Table, Tbody} from '@chakra-ui/react';
import { useSelector } from "react-redux";
import { admingetapprovedUser } from '../../redux/actions/admin';
import AdminAction from './AdminAction';
import { Skeleton, Flex } from '@chakra-ui/react';
function FetchUser () {
    const dispatch = useDispatch();
    const { approve, users, message, loading } = useSelector((state) => state.admin);

    useEffect(() => {
      dispatch(admingetapprovedUser());
    }, [approve, message, dispatch]);

    return (
      <>
      {
        loading ?   
          <Box  minH="100vh">
             <TableContainer boxSize={{base:"3xs", md:"lg", xl:"auto" }}>
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th>User Name</Th>
                      <Th>Company Name</Th>
                      <Th>Mobile No</Th>
                      <Th>Category</Th>
                      <Th>Status</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      users.map((user, index)=>(
                        <Tr key={index}>
                          <Td>
                            <Skeleton
                              height='5'
                              fadeDuration={4}
                              bg='blue.500'
                              color='white'
                            />
                          </Td>
                          <Td>
                            <Skeleton
                              height='5'
                              fadeDuration={4}
                              bg='blue.500'
                              color='white'
                            />
                          </Td>
                          <Td>
                            <Skeleton
                              height='5'
                              fadeDuration={4}
                              bg='blue.500'
                              color='white'
                            />
                          </Td>
                          <Td>
                            <Skeleton
                              height='5'
                              fadeDuration={4}
                              bg='blue.500'
                              color='white'
                            />
                          </Td>
                          <Td> 
                            <Skeleton py="4" px="10" color="white" textAlign="center" bg="green.500" rounded="full"></Skeleton>                               
                          </Td>
                          <Td width="sm"> 
                            <Flex gap="3">
                              <Skeleton py="4" px="41" color="white" textAlign="center" bg="green.500" rounded="md" ></Skeleton>
                              <Skeleton py="4" px="41" color="white" bg="red.500"rounded="md"></Skeleton> 
                              <Skeleton py="4" px="41" color="white" bg="red.500"rounded="md"></Skeleton> 

                            </Flex>
                          </Td>

                        </Tr>
                      ))
                    }
                  </Tbody>
                </Table>
              </TableContainer>
          </Box> : (
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
                    users.map((user, index)=>(
                      <Tr key={index}>
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
        )
      }
        
      </>
    );
};

export default FetchUser