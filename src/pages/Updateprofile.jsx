import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser, updateprofile } from "../redux/actions/user";
import { useSelector } from "react-redux";
import { Box, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Form from "../components/Form";
import { FaCheck } from "react-icons/fa";

function Updateprofile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
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

  const submitHandler = (e) => {
    e.preventDefault();
    const res = dispatch(
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
    dispatch(loadUser());
    if(res) navigate('/profile')
  };

  return (
    <>
      <Title title="Edit Profile"/>
      {/* <Box 
        maxW="6xl" 
        mx="auto" 
        my={12}
        px={4} 
        py={12} 
        border="1px" 
        borderColor="gray.200" 
        borderRadius="lg"
      >
        <Grid templateColumns={{ md: "repeat(2, 1fr)" }} gap={8} mx={4}>
          <Box>
            <Box textAlign={{ base: "center", md: "left" }} mb={6}>
              <Box textAlign={{ base: "center", md: "left" }} mb={6}>
                <Heading as="h2" size="md" mb={2} fontSize={"23px"}>Business Information</Heading>
                <Text color="gray.500" _dark={{ color: "gray.400" }}>
                  Enter your personal details.
                </Text>
              </Box>
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="business-name">Business Name</FormLabel>
                <Input id="business-name" placeholder="Acme Inc" value={companyname}
                  onChange={(e) => setCompanyname(e.target.value)}/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="business-type">Business Type</FormLabel>
                <Select id="business-type" placeholder="Select business type" vlaue={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Manufacturer">Manufacture</option>
                  <option value="Wholesaler">Wholesaler</option>
                  <option value="Raw material suppliers">Raw material suppliers</option>
                  <option value="Transpoter">Transpoter</option>
                  <option value="Designer">Designer</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="business-city">Business City</FormLabel>
                <Input id="business-city" placeholder="San Francisco" value={city}
                        onChange={(e) => setCity(e.target.value)}/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="business-state">Business State</FormLabel>
                <Input id="business-state" placeholder="California" value={state}
                        onChange={(e) => setState(e.target.value)}/>
              </FormControl>
            </Grid>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="business-address">Business Address</FormLabel>
                <Input id="business-address" placeholder="123 Main St" value={address}
                        onChange={(e) => setAddress(e.target.value)} />
              </FormControl>
            </Grid>
            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="business-website">Business Website</FormLabel>
              <Input id="business-website" placeholder="www.acme.com" value={website}
                        onChange={(e) => setWebsite(e.target.value)} />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="business-phone">Business Phone</FormLabel>
              <Input id="business-phone" placeholder="+91 (555) 555-5555" value={phoneNo}
                        onChange={(e) => setPhoneNo(Number(e.target.value))}/>
            </FormControl>
          </Box>
          <Box>
            <Box textAlign={{ base: "center", md: "left" }} mb={6}>
              <Heading as="h2" size="md" mb={2} fontSize={"23px"}>Personal Information</Heading>
              <Text color="gray.500" _dark={{ color: "gray.400" }}>
                Enter your personal details.
              </Text>
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="first-name">First Name</FormLabel>
                <Input id="first-name" placeholder="John" value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="last-name">Last Name</FormLabel>
                <Input id="last-name" placeholder="Doe" value={lastname}
                        onChange={(e) => setLastname(e.target.value)}/>
              </FormControl>
            </Grid>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input id="username" placeholder="johndoe" value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" placeholder="m@example.com" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
              </FormControl>
            </Grid>
            <Button type="submit" width="full" mt={4} bg={"#00246B"} _hover={"gray.600"} color="white" onClick={submitHandler}>
              Save
            </Button>
          </Box>
        </Grid>
      </Box> */}
      <Form inputs={inputs} setInputs={setInputs} errors='' readonly = "" isRegistration="false"/>
      <Box width={"10rem"} mx={{xl: "290px",  base: "5" }}>
        <Flex>
          <Button type="submit" gap="5" pl="10" pr='0' width="full" mt={1} bg={"#00A9DA"} _hover={"#048fb6"} color="white" rounded="sm" onClick={submitHandler}>
            Save Changes
            <Box bg="#0398c2" color="white" alignSelf="center" p="3"><FaCheck/></Box>
          </Button>
        </Flex> 
      </Box>
      {/* <Box width={"20rem"} className="mx-auto">
        <Button type="button" width="full" mt={1} bg={"#00246B"} _hover={"gray.600"} color="white" onClick={submitHandler}>
          Save Changes 
        </Button>
      </Box> */}
    
    </>
    
  );
}

export default Updateprofile;
