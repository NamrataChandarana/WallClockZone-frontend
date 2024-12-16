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
import HowItWorks from "../components/HowItWorks";


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

        <HowItWorks/>

        {/* ======= Contact Section ======= */}
        <ContactSec/>
        <Footer />
      </>
    )   
}

export default Home;
