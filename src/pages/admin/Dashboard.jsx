import React from "react";
import { Box, Flex} from "@chakra-ui/react";
import { Link} from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";

function Dashboard() {

  return (
    <>
      <AdminHeader />
      <Flex gap="5">
        <AdminSidebar/>
        <Box minH="100vh">
          <Text as="h3" color="gray.600" fontWeight="xs" pt="3">Dashboard</Text>
          <Flex gap="5" mt="5" direction={{base:"column", md:"row"}}>
            <Link to="/getallusers" mt="2">
            <Box cursor="pointer">
                <Box h="28" w="3xs" bg="green.600" > 
                  <Flex pt="8" justifyContent="space-around">  
                    <Box fontSize="4xl" color="white">
                      <FaUsers />
                    </Box>
                    <Box color="white" fontSize="xl" pt="7">
                      List of Users
                    </Box>
                  </Flex>
                  <Box bg="green.400" h="6" w="3xs">
                    <Flex justifyContent="space-between" px="2" color="white" fontSize="sm">
                      <Box>
                        View More
                      </Box>
                      <Box pt="1">
                        <FaAngleRight/>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
            </Box>
            </Link>
            <Link to="/getapprovedusers">
              <Box cursor="pointer">
                  <Box h="28" w="3xs" bg="yellow.500" > 
                    <Flex pt="8" justifyContent="space-around">  
                      <Box fontSize="4xl" color="white">
                        <FaUsers />
                      </Box>
                      <Box color="white" fontSize="xl" pt="7">
                        Approved Users
                      </Box>
                    </Flex>
                    <Box bg="yellow.300" h="6" w="3xs">
                      <Flex justifyContent="space-between" px="2" color="white" fontSize="sm">
                        <Box>
                          View More
                        </Box>
                        <Box pt="1">
                          <FaAngleRight/>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
              </Box>
            </Link>
          </Flex>
        </Box>
      </Flex>
      <AdminFooter/>
    </>
  );
}

export default Dashboard;