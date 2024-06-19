import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registeration } from "../redux/actions/user";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {toast} from 'sonner'
import { Box, Button } from '@chakra-ui/react';
import Title from "./Title";
import Form from "./Form";
import SubHeading from "./SubHeading";
import { FaCheck } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

function RegisterComponent() {
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
  const [errors, setErrors] = useState({});

  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const submitHandler = async(e) => {
    e.preventDefault();

    if (!inputs.firstname || !inputs.lastname || !inputs.email || !inputs.password || !inputs.username || !inputs.companyname || !inputs.phoneNo) {
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

    const res = dispatch(
      registeration(
        inputs.firstname,
        inputs.lastname,
        inputs.companyname,
        inputs.phoneNo,
        inputs.username,
        inputs.password,
        inputs.category,
        inputs.city,
        inputs.state,
        inputs.address,
        inputs.email,
        inputs.website
      )
    );
    console.log(res)
    if(res && res.message){
      toast(res.message);
    }
    if(res) setErrors(res);
  };

  if (isAuthenticated) return <Navigate to="/profile" />;

  return (
    <>
      <Header/>
      <SubHeading title="Wall Clock Zone" subTitle="User Register"/>
      <Title title="Register An Account" />
      <Form inputs={inputs} setInputs={setInputs} errors={errors} readonly="" isRegistration="true"/>
      <Box width={"9rem"} mx={{xl: "290px",  base: "5" }} mb="10">
        <Flex>
          <Button type="submit" gap="5" pl="10"  width="full" mt={1} bg={"#00A9DA"} _hover={"#048fb6"} color="white" rounded="sm" onClick={submitHandler}>
            Register
            <Box bg="#0398c2" color="white" alignSelf="center" p="3" ><FaCheck /></Box>
          </Button>
        </Flex> 
      </Box>
      <Footer/>
    </>
  );
}

export default RegisterComponent;
