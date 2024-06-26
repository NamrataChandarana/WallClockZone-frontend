import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { admingetallUser } from "../../redux/actions/admin";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Flex} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import AdminHeader from '../../components/admin/AdminHeader'
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminFooter from "../../components/admin/AdminFooter";
import {Tr, Th, Td,Thead, TableContainer, Table, Tbody} from '@chakra-ui/react';
import AdminAction from "../../components/admin/AdminAction";
import { Skeleton } from "@chakra-ui/react";

function Adminalluser() {
  const dispatch = useDispatch();
  const { users} = useSelector((state) => state.admin);
  const [approve, setApprove] =useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function allUser(){
      setLoading(true)
      const res = await dispatch(admingetallUser());
      setApprove(res);
      setLoading(false)
    } 
    allUser()  
  }, [dispatch]);

  return (
      <>
        <AdminHeader/>
        <Flex gap="5" >
          <AdminSidebar/>
          {
            loading ?
           
            <Box   >
              <Text as="h3" color="gray.600" fontWeight="xs" pt="3">All Users</Text>
              <Box>
                <Box bg="#00A9DA" h="10" mt="10">
                  <Text color="white" fontSize="lg" py="2" px="5">User List</Text>
                </Box>
              </Box>
               <TableContainer width={{base:"xs", md:"lg", xl:"auto" }} as={Table} >
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
                        users.map((user)=>(
                          <Tr>
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
            </Box>
           :
          (
            <Box minH="100vh" >
              <Text as="h3" color="gray.600" fontWeight="xs" pt="3">All Users</Text>
              <Box>
              <Box bg="#00A9DA" h="10" mt="10" >
                  <Text color="white" fontSize="lg" py="2" px="5" >User List</Text>
                </Box>
              </Box>
              <div>
                {approve && approve.length > 0 ? (
                  <Box >
                    <TableContainer width={{base:"250px", sm:"sm", md: "2xl", lg:"3xl", xl:"5xl" }} overflow="auto" overflowY="auto">
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
                        <Tbody mb="5">
                          {
                            approve.map((user)=>(
                              <Tr>
                                <Td>{user.firstname + " " + user.lastname}</Td>
                                <Td>{user.companyname}</Td>
                                <Td isNumeric>{user.phoneNo}</Td>
                                <Td>{user.category}</Td>
                                <Td>{(user.status) ? 
                                   <Text py="2" px="2" color="white" textAlign="center" bg="green.500" rounded="full" cursor="pointer" fontSize="sm">Approved</Text>:
                                   <Text py="2" px="2" color="white" bg="red.500" cursor="pointer" rounded="full"  fontSize="sm">Not Approved</Text> }
                                </Td>
                                <AdminAction id={user._id} status={user.status} setApprove={setApprove}/>
                              </Tr>
                            ))
                          }
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Box>
                  ):(
                  <h1
                    style={{
                      textAlign: "center",
                      fontSize: "40px",
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",
                      marginTop: "100px",
                    }}
                  >
                    Users Not Found.
                  </h1>
                )}
              </div>
            </Box>
          )
          } 
        </Flex>
        <AdminFooter/>
      </>
  ); 
}

export default Adminalluser;
