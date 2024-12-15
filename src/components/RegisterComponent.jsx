import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {loadUser, registeration } from "../redux/actions/user";
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

  const validateField = (inputs) => {
    const updatedErrors = { ...errors };
    if (inputs.firstname ) updatedErrors.firstname = ""; 
    if (inputs.lastname) updatedErrors.lastname = ""; 
    if (inputs.email) updatedErrors.email = "";
    if (inputs.password) updatedErrors.password = ""; 
    if (inputs.username) updatedErrors.username = "";
    if (inputs.phoneNo) updatedErrors.phoneNo = "" ; 
    if (inputs.companyname) updatedErrors.companyname = ""; 
    if (inputs.category) updatedErrors.category = "";
    if (inputs.city) updatedErrors.city = ""; 
    if (inputs.state) updatedErrors.state = ""; 
    if (inputs.address) updatedErrors.address = ""; 
    if (inputs.name) updatedErrors.name = "";

    setErrors(updatedErrors);
  };

  useEffect(()=>{
    validateField(inputs)
  },[inputs])


  const submitHandler = async(e) => {
    e.preventDefault();

    if (!inputs.firstname || !inputs.lastname || !inputs.email || !inputs.password || !inputs.username || !inputs.companyname || !inputs.phoneNo || !inputs.category || !inputs.city || !inputs.state || !inputs.address) {
      const errorMsgs = {
        firstname: inputs.firstname?.length >= 2 ? "" : "Enter at least 2 characters" ,
        lastname: inputs.lastname?.length >= 2 ? "" : "Enter at least 2 characters",
        email: inputs.email?.length >= 2 ? "" : "Enter a valid email address",
        password: inputs.password?.length >= 2 ? "" : "Enter password",
        username: inputs.username?.length >= 2 ? "" : "Enter at least 2 characters",
        companyname: inputs.companyname?.length >= 2 ? "" : "Enter at least 2 characters",
        phoneNo: inputs.companyname?.length >= 2 ? "" :"Enter a valid phone number",
        category: inputs.category ? "" : "Select category",
        city: inputs.city?.length >= 2 ? "" :"Enter your city",
        state:inputs.state?.length >= 2 ? "" : "Enter your state",
        address: inputs.address?.length >= 2 ? "" : "Enter your address",
        name: inputs.name?.length >= 2 ? "" : "Enter your bussiness name",
      }
      console.log(errorMsgs)
      setErrors(errorMsgs)
      return;
    }

    if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      setErrors("Please enter a valid email address");
      return;
    }
    const phoneNoRegex = /^\d{10}$/;
    if (!phoneNoRegex.test(inputs.phoneNo)) {
      setErrors("Please enter a valid phone number (10 digits)");
      return;
    }
    
    // if () {
    //   setErrors({email: "Please enter a valid email address"});
    //   return;
    // }
    
   

    const res = await dispatch(
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

    dispatch(loadUser())
    if(res && res.message && res.success === true){
      toast(res.message);
    }
    if(res){
      console.log(res)
      setErrors(res);
    } 
  };

  if (isAuthenticated) return <Navigate to="/approval" />;

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
