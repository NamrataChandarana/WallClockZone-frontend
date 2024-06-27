import React from "react";
import { useSelector } from "react-redux";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminFooter from "../../components/admin/AdminFooter";
import FetchUser from "../../components/admin/FetchUser";
import { Text, Box, Flex }  from '@chakra-ui/react';

function Admingetapproveduser() {
  
  const { users } = useSelector((state) => state.admin);

  return ( 
    <>
        <AdminHeader/>
        <Flex gap="5">
          <AdminSidebar/>
          <Box minH="100vh">
            <Text as="h3" color="gray.600" fontWeight="xs" pt="3">Approved Users</Text>
            <Box>
              <Box bg="#00A9DA" h="10" mt="10">
                <Text color="white" fontSize="lg" py="2" px="5">User List</Text>
              </Box>
            </Box>
            <Box className="col-md-12 ">
              {users && users.length > 0 ? (
                  <FetchUser/>
                ): (
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
            </Box>
          </Box>
        </Flex>
        <AdminFooter/>
        
    </>
  );
}

export default Admingetapproveduser;
