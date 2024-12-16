import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateprofile, UserProfileUpdate } from "../redux/actions/user";
import { useSelector } from "react-redux";
import { Box, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Form from "../components/Form";
import { FaCheck } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHeading from "../components/SubHeading";
import { toast } from "sonner";

function Updateprofile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [inputs , setInputs] = useState({
    firstname: '',
    lastname: '',
    companyname: '',
    phoneNo: user.phoneNo || '',
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

   const submitHandler = async(e) => {
    if (!inputs.firstname || !inputs.lastname || !inputs.email || !inputs.password || !inputs.username || !inputs.companyname || !inputs.phoneNo || !inputs.category || !inputs.city || !inputs.state || !inputs.address) {
      toast.error("Please fill all the required fields", { position: "top-center", className: "max-w-fit" });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      toast.error("Please enter a valid email address", { position: "top-center", className: "max-w-fit" });
      return;
    }
    const phoneNoRegex = /^\d{10}$/;
    if (!phoneNoRegex.test(inputs.phoneNo)) {
      toast.error("Please enter a valid phone number (10 digits)", { position: "top-center", className: "max-w-fit" });
      return;
    }
    e.preventDefault();
    const res = await dispatch(
      updateprofile(
        inputs.firstname,
        inputs.lastname,
        inputs.companyname,
        inputs.phoneNo,
        inputs.username,
        inputs.category,
        inputs.city,
        inputs.state,
        inputs.address,
        inputs.email,
        inputs.website
      )
    );
    if(res) navigate('/profile')
  };

  return (
    <>
      <Header />
      <SubHeading title="Wall Clock Zone" subTitle="Edit Profile"/>
      <Title title="Edit Profile"/>
      {
        user && user.isRegister ? (
          <>
            <Form inputs={inputs} setInputs={setInputs} errors='' readonly = "" isRgistration="false"/>
            <Box width={"10rem"} mx={{xl: "290px",  base: "5" }}>
              <Flex>
                <Button type="submit" gap="5" pl="10" pr='0' width="full" mt={1} bg={"#00A9DA"} _hover={"#048fb6"} color="white" rounded="sm" onClick={submitHandler}>
                  Save Changes
                  <Box bg="#0398c2" color="white" alignSelf="center" p="3"><FaCheck/></Box>
                </Button>
              </Flex> 
            </Box>  
          </>
        ) :(
          <UserProfileUpdate/>
        )
      }
    <Footer />
    </>
    
  );
}

export default Updateprofile;
