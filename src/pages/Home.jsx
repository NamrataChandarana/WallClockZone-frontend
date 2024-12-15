import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Flex, Image, Button, Text, Stack, Link } from '@chakra-ui/react';
import { FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import Title from "../components/Title";
import Carousels from "../components/Carousels";
import Service from "../components/Service";
import { MdMyLocation} from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSec from "../components/ContactSec";
import { useEffect } from "react";
import { loadUser } from "../redux/actions/user";
import Herosection from "../components/Herosection";

function Home() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(loadUser());
  },[dispatch])
  
  return (
      <>
        <Header />
        {/* ======= Hero Section ======= */}
        <Herosection/>
        {/* ======= About Section ======= */}
        <Box as="section" id="about" className="about" pt={0} px="7">
          <Title title="About Us" />
          <Flex flexDirection={{ base: 'column', lg: 'row' }} className="container" gap="8" mx="auto" >
            <Box >
              <Image
                src={require('./asset/img1.jpeg')}
                className="img-fluid animated"
                alt="about"
                height={300}
                mx="auto"
              />
            </Box>
            <Box
              className="col-lg-7"
              pt={{ base: 4, lg: 0 }}
              fontFamily="'Open Sans', sans-serif"
              flex="1"
            >
              <Text textAlign="justify" fontFamily={"font-family: Open Sans"} letterSpacing=".1px" fontSize={{base:"sm"}}>
                Bringing the Wall Clock Industry Together: Connecting Businesses, Suppliers, and Buyers.
                Wall clock business has many industries in various states of India. But due to the unavailability of any digitalized or fast connecting system, the industries can only expand in regional level. Due to lack of information about the raw material suppliers and other basic requirements, new startups are also difficult. so, we are trying to solve the problem.
              </Text>
              <Stack spacing={0} fontWeight="xs"  >
                <Flex gap="2" fontSize="xl"  >
                  <MdMyLocation mt="2" color="#00A9DA" />
                  <Text fontSize="sm">1234 North Avenue Luke Lane South Bend, IN 360001</Text>
                </Flex>

                <Flex gap="2">
                  <FaPhoneAlt color="#00A9DA"/>
                  <Text>1234567894</Text>
                </Flex>

                <Flex gap="2">
                  <MdEmail color="#00A9DA"/>
                  <Text>support@wallclockzone.com</Text>
                </Flex>

              </Stack>
              <Box width={"9rem"}>
                <Flex>
                  <Link as={RouterLink} to="/about"> 
                    <Button type="submit" gap="5" pl="10" pr='0' width="full" mt={1} bg={"#00A9DA"} _hover={"#048fb6"} color="white" rounded="sm">
                      Learn More
                      <Box bg="#0398c2" color="white" alignSelf="center" p="3"><FaChevronRight /></Box>
                    </Button>
                  </Link> 
                </Flex> 
              </Box>
            </Box>
          </Flex>
        </Box>
        {/* ======= Services Section ======= */}
        <Service/>
        {/* ======= cta Section ======= */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-start">
                <h3>Wall Clock Zone</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <Box width={"5rem"} mx={{base:"auto", lg:"10"}}>
                <Flex>
                  <Link as={RouterLink} to="/register"> 
                    <Button type="submit" gap="5" pl="5" pr='0' width="full" mt={1} bg={"white"} _hover={"#76cfe7"} color="#0398c2" rounded="sm" >
                      Register Now
                      <Box bg="#0398c2" color="white" alignSelf="center" p="3"><FaChevronRight /></Box>
                    </Button>
                  </Link> 
                </Flex> 
              </Box>
            </div>
          </div>
        </section>
        {/* ======= Contact Section ======= */}
        <ContactSec/>
        <Footer />
      </>
    )   
}

export default Home;
