import React from 'react'
import { Box, Flex} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function AdminSidebar() {

  const menuList = [
    {
      icon: <FaHome />,
      name: "Dashboard",
      path: '/admin/dashboard'
    }
  ]
  return (
    <Box  width={{base:"45px", md:"240px"}} bg="#272626"  >
        {menuList.map((item) => (
          <NavLink to={item.path} activeStyle={{bg:"#00A9DA", color:"white"}}>
            <Flex color="white" gap="2" py="2" px="3" _hover={{color: "#00A9DA"}}>
              <Box pt="1" >
                  {item.icon}
                </Box>
                <Box display={{base:"none",md:"block"}}>
                  {item.name}
              </Box>
            </Flex>
          </NavLink>      
        ))}
    </Box>
  )
}

export default AdminSidebar