import React, { useState, useEffect } from "react";
import { signup } from "../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Input, Text} from "@chakra-ui/react";
import FormErrorHandler from "./FormErrorHandler";

// import toast from "react-hot-toast";
function SignupComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState();


    const validateField = (errors) => {
      const updatedErrors = { ...errors };
      if(name) updatedErrors.name = "";
      if (email) updatedErrors.email = ""; 
      if (password) updatedErrors.password = ""; 
      setErrors(updatedErrors);
    };
   
    useEffect(()=>{
      validateField()
    },[email, password, name])

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      const errorMsgs = {
        name: name?.length >= 2 ? "" : "Enter at least 2 character",
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
    
    dispatch(signup(name, email, password));
  };

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <>
    <Box display="flex"  justifyContent="center" px={{ base: 6, xl: 10 }} mb="10" >
      <Box mx="auto" w="350px" p={5} borderWidth="1px" borderRadius="md" borderColor="gray.200">
        <Box as="form" spacing={4} pt={5}>
          <FormControl>
            <FormLabel htmlFor="email">Name</FormLabel>
            <Input
              id="name"
              type="text"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FormControl>
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
            bg="#18181B"
            color="white"
            py={2.5}
            my={5}
            _hover={{ bg: "#18181B" }}
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
    </>
  );
}

export default SignupComponent