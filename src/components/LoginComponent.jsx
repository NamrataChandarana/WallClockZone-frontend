import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import {  login } from "../redux/actions/user";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {toast} from 'sonner'
import { Box, Button, FormControl, FormLabel, Input, Text} from "@chakra-ui/react";
import Title from "./Title";
import SubHeading from "./SubHeading";
import Header from "./Header";
import Footer from "./Footer";
import { loadUser } from "../redux/actions/user";
import FormErrorHandler from "./FormErrorHandler";

// import toast from "react-hot-toast";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState();


    const validateField = (errors) => {
      const updatedErrors = { ...errors };
      if (email) updatedErrors.email = ""; 
      if (password) updatedErrors.password = ""; 
      setErrors(updatedErrors);
    };
  
    useEffect(()=>{
      validateField()
    },[email, password])

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      const errorMsgs = {
        email: email?.length >= 2  ? "" : "Enter a valid email address",
        password: password?.length >= 2 ? "" : "Enter password"
      }
      setErrors(errorMsgs)
      return;
    }

    if(email && !/\S+@\S+\.\S+/.test(email)){
      const errorMsgs = {
        email: "Enter valid email"
      }
      setErrors(errorMsgs);
      return
    }
    
    dispatch(login(email, password));
  };

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <>
    <Header/>
    <SubHeading title={"Wall Clock Zone"} subTitle={"User Login"}/>
    <Title title="Sign In"/>
    {/* <Box color="gray.500" textAlign={"center"} mb={"20px"}>Login with id & password </Box> */}
    <Box display="flex"  justifyContent="center" px={{ base: 6, xl: 10 }} mb="10" >
      <Box mx="auto" w="350px" p={5} borderWidth="1px" borderRadius="md" borderColor="gray.200">
        <Box as="form" spacing={4} pt={5}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="text"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            
          </FormControl>
          <FormErrorHandler errors={errors?.email} />
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <FormErrorHandler errors={errors?.password} />
          </FormControl>
          <Button
            type="submit"
            w="100%"
            bg="#0092bb"
            color="white"
            py={2.5}
            my={5}
            _hover={{ bg: "#0392b9" }}
            // mx="5%"
            onClick={submitHandler}
          >
            Sign In
          </Button>
        </Box>
        <Text color="gray.500" mx={5} mb={5} textAlign="center">
          Create a new Account?
          <Link to="/register" style={{ textDecoration: "underline" }} _hover={{color: "#00A9DA"}}>
             Register
          </Link>
        </Text>
      </Box>
    </Box>
    <Footer/>
    </>
  );
}

export default LoginComponent;
