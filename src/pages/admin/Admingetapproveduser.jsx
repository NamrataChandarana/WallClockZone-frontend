import React from "react";
import { useSelector } from "react-redux";
import { Box, Flex} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import FetchUser from "../../components/FetchUser";
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
            <div className="col-md-12 ">
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
          </div>
          </Box>
        </Flex>
        <AdminFooter/>
        
    </>
  );
}

export default Admingetapproveduser;
