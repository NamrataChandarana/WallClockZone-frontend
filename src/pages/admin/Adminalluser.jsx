import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { admingetallUser } from "../../redux/actions/admin";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import FetchUser from "../../components/FetchUser";
import { Box, Flex} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import { Tfoot, Tr, Th, Td,Thead, TableContainer, TableCaption, Table, Tbody} from '@chakra-ui/react';

function Adminalluser() {
  const [keyword, setkeyword] = useState("");
  const dispatch = useDispatch();
  const { users, isAuthenticated, message } = useSelector((state) => state.admin);

 
  useEffect(() => {
    dispatch(admingetallUser());

  }, [message]);

  if (isAuthenticated) return <Navigate to="/admin/dashboard" />

  return (
      <>
        <AdminHeader/>
        <Flex gap="5">
          <AdminSidebar/>
          <Box minH="100vh">
            <Text as="h3" color="gray.600" fontWeight="xs" pt="3">All Users</Text>
            <Box>
              <Box bg="#00A9DA" h="10" mt="10">
                <Text color="white" fontSize="lg" py="2" px="5">User List</Text>
              </Box>
            </Box>
            <div className="col-md-12 ">
              {users && users.length > 0 ? (
                <Box>
                  <TableContainer>
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
                                 <Text py="2" color="white" textAlign="center" bg="green.500" rounded="full" cursor="pointer" fontSize="sm">Approved</Text>:
                                 <Text py="2" px="2" color="white" bg="red.500" cursor="pointer" rounded="full"  fontSize="sm">Not Approved</Text> }
                              </Td>
                              <Flex gap="2" pt="5">
                                <Text py="2" px="2" color="white" textAlign="center" bg="blue.500" cursor="pointer" fontSize="sm">Message</Text>
                                <Text py="2" px="2" color="white" textAlign="center" bg="green.500" cursor="pointer" fontSize="sm">Approve</Text>
                                <Text py="2" px="2" color="white" textAlign="center" bg="red.500" cursor="pointer" fontSize="sm">Delete</Text>
                              </Flex>
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
        </Flex>
        <AdminFooter/>
      </>
  ); 
}

export default Adminalluser;
