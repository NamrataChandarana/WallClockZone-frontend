import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/actions/admin';
import { Box, Flex,Text } from '@chakra-ui/react';
import { Tfoot, Tr, Th, Td,Thead, TableContainer, TableCaption, Table, Tbody} from '@chakra-ui/react';
import { useSelector } from "react-redux";
import { useState } from 'react';
import { admingetapprovedUser } from '../redux/actions/admin';

function FetchUser () {
    const dispatch = useDispatch();
    const [keyword] = useState("");
    const { users } = useSelector((state) => state.admin);

    function handleDelete(userKey){
      const res = dispatch(deleteUser(userKey))
    }

    useEffect(() => {
      dispatch(admingetapprovedUser(keyword));
    }, [keyword]);

    return (
      <>
        {/* <div class="container" width={"100%"} style={{ margin: "0px" }}>
          <div class="row">
            <div class="col-md-12" width={"100%"}>
              <div class="card">
                <div
                  class="table-responsive"
                  width={"100%"}
                  style={{ margin: "50px" }}
                >
                  <table class="table no-wrap user-table mb-0 " width={"100%"}>
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium pl-4"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium"
                        >
                          Added
                        </th>
                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium"
                        >
                          Category
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="pl-4">1</td>
                        <td>
                          <h5 class="font-medium mb-0">
                            {firstname + " " + lastname}
                          </h5>
                          <span class="text-muted">{state + " " + city}</span>
                        </td>
                        <td>
                          <span class="text-muted">{email}</span>
                        </td>
                        <td>
                          {category}
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline-info btn-circle btn-lg btn-circle mr-5"
                          >
                            Approved
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-info btn-circle btn-lg btn-circle ml-5"
                            onClick={() => handleDelete(userKey) }
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}

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
                        <Text py="2" px="2" color="white" textAlign="center" bg="green.500" rounded="full" cursor="pointer" fontSize="sm">Approved</Text>:
                        <Text py="2" px="2" color="white" bg="red.500" cursor="pointer"  rounded="full" fontSize="sm">Not Approved</Text> }
                      </Td> 
                      <Flex gap="2" pt="5">
                        <Text py="2" px="2" color="white" textAlign="center" bg="blue.500" cursor="pointer" fontSize="sm">Message</Text>
                        <Text py="2" px="2" color="white" textAlign="center" bg="green.500" cursor="pointer" fontSize="sm">Disapprove</Text>
                        <Text py="2" px="2" color="white" textAlign="center" bg="red.500" cursor="pointer" fontSize="sm">Delete</Text>
                      </Flex>
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