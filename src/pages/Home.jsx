import React from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSec from "../components/ContactSec";
import { useEffect } from "react";
import { loadUser } from "../redux/actions/user";
import Herosection from "../components/Herosection";
import HowItWorks from "../components/HowItWorks";
import ServicesSection from "../components/ServiceSection";
import JoinNetwork from "../components/JoinNetwork";


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

        <ServicesSection/>

        <JoinNetwork/>

        {/* ======= Contact Section ======= */}
        <ContactSec/>
        <Footer />
      </>
    )   
}

export default Home;
