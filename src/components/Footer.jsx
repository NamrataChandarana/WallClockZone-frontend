import React from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./style/style.css";
import { Box, Flex,  SimpleGrid, Stack, Text, IconButton, WrapItem, Tooltip, Spacer } from "@chakra-ui/react";
import {FaTwitter, FaGithubSquare, FaLinkedinIn} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Box bg="#181818"  py={10} px={20}  fontFamily={"font-family: Open Sans"} letterSpacing='.8px' mt="10">
          <Flex direction={{ base: "column", lg: "row" }} align="start" mb={8}>
            <SimpleGrid columns={{ base: 1, lg: 4 }}  spacing={50} width={"full"}  >
              <Box marginX={{base:"auto"}} width={{base:"250px", lg:"auto"}}>
                <Text fontSize="xl" fontWeight="xs" color="#00A9DA" >Contact Us</Text>
                <Stack spacing={0} color="white" fontWeight="xs" fontSize="sm" >
                  <Text>1234 North Avenue Luke Lane South Bend, IN 360001</Text>
                  <Text>+0123456789</Text>
                  <Text>support@wallclockzone.com</Text>
                </Stack>
              </Box>
              <Box marginX={{base:"auto"}} width={{base:"250px", lg:"auto"}}>
                <Text fontSize="xl" fontWeight="xs" color="#00A9DA" >Useful Links</Text>
                <Stack spacing={1} color="white" fontWeight="xs" fontSize="sm" >
                  <Link to={"/"}>Home</Link>
                  <Link to={"/about"}>About Us</Link>
                  <Link to={"/category"}>Categories</Link>
                  <Link to={"/register"}>Register</Link>
                </Stack>
              </Box>
              <Box marginX={{base:"auto"}} width={{base:"250px", lg:"auto"}}>
                <Text fontSize="xl" fontWeight="xs" color="#00A9DA">Category</Text>
                <Stack spacing={1} color="white" fontWeight="xs" fontSize="sm" >
                  <Link to={"/category"}>Manufacture</Link>
                  <Link to={"/category"}>Wholesaler</Link>
                  <Link to={"/category"}>Row Material Suppliers</Link>
                  <Link to={"/category"}>Designer</Link>
                  <Link to={"/category"}>Transpoter</Link>
                </Stack>
              </Box>
              <Box marginX={{base:"auto"}} width={{base:"250px", lg:"auto"}}> 
              <Text fontSize="xl" fontWeight="xs" color="#00A9DA">Social Contact Us</Text>
                <Flex mt={1} justify={{ base: "start", lg: "start" }} spacing={5} gap="1">
                  <WrapItem>
                    <Tooltip label='Github' hasArrow arrowSize={15} placement='top' bg="#00A9DA" py="1.5" px="4" mb="2"> 
                    <IconButton
                      as="Link"
                      href="#"
                      aria-label="Facebook"
                      icon={<FaGithubSquare />}
                      variant="ghost"
                      size="lg"
                      isRound
                      bg="#00A9DA"
                      _hover={{bg:"#00A9DA"}}
                      color="white"
                    />
                    </Tooltip>
                  </WrapItem>
                  <WrapItem>
                    <Tooltip label='Twitter' hasArrow arrowSize={15} placement='top' bg="#00A9DA" py="1.5" px="4" mb="2"> 
                    <IconButton
                      as="Link"
                      href="#"
                      aria-label="Twitter"
                      icon={<FaTwitter />}
                      variant="ghost"
                      size="lg"
                      isRound
                      bg="#00A9DA"
                      _hover={{bg:"#00A9DA"}}
                      color="white"
                    />
                    </Tooltip>
                  </WrapItem>
                  <WrapItem>
                    <Tooltip label='LinkedIn' hasArrow arrowSize={15} placement='top' bg="#00A9DA" py="1.5" px="4" mb="2"> 
                    <IconButton
                      as="Link"
                      href="#"
                      aria-label="Instagram"
                      icon={<FaLinkedinIn />}
                      variant="ghost"
                      size="lg"
                      isRound
                      bg="#00A9DA"
                      _hover={{bg:"#00A9DA"}}
                      color="white"
                    />
                    </Tooltip>
                  </WrapItem>  
                </Flex>
              </Box>
            </SimpleGrid>
          </Flex>
          <hr />
      </Box>
      <Box bg="black" paddingY="8" paddingX="20" textAlign={{base:"center", lg:"start"}}>
        <Text fontSize="sm" color="white">© Copyright 2024{" "}
          <Box as="span" color="#00A9DA" >Wall Clock Zone</Box>{" "}
          All Rights Reserved
        </Text>
      </Box>
    </>
  );
}

export default Footer;
