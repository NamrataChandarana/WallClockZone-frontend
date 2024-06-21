import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../redux/actions/search";
import { accessChatUser } from '../redux/actions/chat';
import {Link, useParams} from 'react-router-dom';
import { useToast } from "@chakra-ui/react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Box, Button, Flex, Heading, Text, VStack, Grid } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import SelectedCategorySkeleton from "../components/SelectedCategorySkeleton";
import Title from "../components/Title";
import SubHeading from "../components/SubHeading";
import { FiMessageSquare } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SelectedCategory() {

  const { slug }= useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.search);
  const { loading } = useSelector((state) => state.search);
  const toast = useToast();

  useEffect(() => {
    dispatch(searchUser(slug));
  }, [slug]);


  function accessChat(userId){
        try{
            dispatch(accessChatUser(userId));
        }catch (error) {
          toast({
              title: "Error fetching the chat",
              description: error.message,
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "top-ceter",
          });
        }
  }

  if(loading){
    return (
      <>
        <Header />
        <SubHeading title="Wall Clock Zone" subTitle={slug}/>
        <SelectedCategorySkeleton />
        <SelectedCategorySkeleton />
        <Footer />
      </>
      
    )
  }

  return (
    <>
      <Header />
      <Box fontFamily={"font-family: Open Sans"}>
        <SubHeading title="Wall Clock Zone" subTitle={slug}/>
        <Title title={slug}/>
        <Box className="row-12 d-flex justify-content-evenly">
          <Box className="row">
            <Box className="col-md-12" >
              {users?.length > 0 ? (
                users.map((user) => (
                  <Box w="full" bg="white" rounded="md" shadow="md" _dark={{ bg: "gray.800" }} mb={10} key={user._id}>
                    <Flex justify="between" align="center" px={6} >
                      <VStack align="start" >
                        <Heading size="xl" fontWeight="sm" lineHeight="tight" color="gray.800" > 
                          {user.companyname}
                        </Heading>
                        <Text color="gray.700" mb={1}>
                          Streamline your team's workflow and boost productivity with our all-in-one collaboration platform.
                        </Text>
                        <Grid >
                          <Flex align="center" gap={2}>
                            <FaUser pt={3} color={"#00A9DA"}/>
                            <Text color="gray.700" _dark={{ color: "gray.400" }} mb={1}>{user.firstname} {user.lastname}</Text>
                          </Flex>
                          <Flex align="center" gap={2}>
                            <EmailIcon color={"#00A9DA"}/>
                            <Text color="gray.700" _dark={{ color: "gray.400" }} mb={1}>{user.email}</Text>
                          </Flex>
                          <Flex align="center" gap={2}>
                            <FaLocationArrow color={"#00A9DA"} />
                            <Text color="gray.700" _dark={{ color: "gray.400" }} mb={1}>{user.address} {user.city}, {user.state}</Text>
                          </Flex>
                          <Flex align="center" gap={2}>
                            <FaBriefcase color={"#00A9DA"} />
                            <Text color="gray.700" _dark={{ color: "gray.400" }} mb={1}>{user.category}</Text>
                          </Flex>
                        </Grid>
                      </VStack>
                    </Flex>
                    <Box width={"9rem"} m="5">
                      <Flex>
                        <Link to={'/chat'} >
                          <Button type="submit" gap="5" pl="10" pr='0' width="full" mt={1} bg={"#00A9DA"} _hover={"#048fb6"} color="white" rounded="sm" onClick={() => { accessChat(user?._id)}}>
                            Contact
                            <Box bg="#0398c2" color="white" alignSelf="center" p="3" ><FiMessageSquare /></Box>
                          </Button>
                        </Link>
                      </Flex> 
                    </Box>
                  </Box>
                ))
              ) : (
                <Heading
                  textAlign="center"
                  fontSize="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mt="100px"
                >
                  No One Yet!
                </Heading>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default SelectedCategory;
