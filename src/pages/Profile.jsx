import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useNavigate} from "react-router-dom";
import Title from "../components/Title";
import { useState } from "react";
import Form from "../components/Form";
import { FaEdit } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHeading from "../components/SubHeading";
import { loadUser } from "../redux/actions/user";

function Profile() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs , setInputs] = useState({
    firstname: '',
    lastname: '',
    companyname: '',
    phoneNo: '',
    username: '',
    password: '',
    category: '',
    city: '',
    state: '',
    address: '',
    email: '',
    website: ''
  })
  useEffect(() => {
    if (user) {
      setInputs({
        firstname: user.firstname || '',
        lastname: user.lastname || '',
        companyname: user.companyname || '',
        phoneNo: user.phoneNo || '',
        username: user.username || '',
        password: user.password || '',
        category: user.category || '',
        city: user.city || '',
        state: user.state || '',
        address: user.address || '',
        email: user.email || '',
        website: user.website || ''
      });
    }
  }, [user]);

  const handleUpdateClick = () => {
    navigate('/updateprofile');
  };

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <SubHeading title="Wall Clock Zone" subTitle="Profile"/>
      <section className="w-100 pl-5" >
        <Title title="Profile"/>
        <Box className="col-lg-10 mb-2" fontWeight="xl" fontFamily={"Open Sans"}>
          <Flex className="row d-flex m-0 p-0" >
            {user?.status === true ? (
              <>
                <Flex className="col-sm-11" gap="2" justifyContent="flex-end">
                  <Text color="gray.600" fontSize="xl"mt="1">Your Business: </Text>
                  <Button colorScheme="green" rounded="sm">Approve</Button>
                </Flex>
                <Text fontSize="sm" fontWeight="medium" color="gray.600" textAlign="end" pr="28">Your profile is approved, users can  view <br />your business profile and contact you directly.</Text>
              </>
            ) : (
              <>
                <Flex className="col-sm-11" gap="2" justifyContent="flex-end" >
                  <Text color="gray.600" fontSize="xl" mt="1">Your Business: </Text>
                  <Button colorScheme="red" rounded="sm">Disapprove</Button>
                </Flex>
                <Text fontSize="sm" fontWeight="medium" color="gray.600" textAlign="end" pr="28">Once your profile is approved, users can  view <br />your business profile and contact you directly.</Text>
              </>
            )}
          </Flex>
        </Box>
        {
          user && 
          <>
            <Form inputs={inputs} setInputs={setInputs} errors='' readonly = "true" isRgistration="false"/>
            <Box width={"7rem"} mx={{xl: "290px",  base: "5" }}>
              <Flex>
                <Button type="submit" gap="5" pl="10" pr='0' width="full" mt={1} bg={"#00A9DA"} _hover={"#048fb6"} color="white" rounded="sm" onClick={handleUpdateClick}>
                  Edit
                  <Box bg="#0398c2" color="white" alignSelf="center" p="3"><FaEdit/></Box>
                </Button>
              </Flex> 
            </Box>
          </>
        }
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
