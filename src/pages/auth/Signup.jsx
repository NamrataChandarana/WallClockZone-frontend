import React from 'react'
import SignupComponent from '../../components/SignupComponent'
import SubHeading from '../../components/SubHeading'
import Header from '../../components/Header'
import Title from '../../components/Title'
import Footer from '../../components/Footer'

const Signup = () => {
  return (
    <>
        <Header/>
        <SubHeading title={"Wall Clock Zone"} subTitle={"User Signup"}/>
        <Title title="Sign up"/>
        <SignupComponent/>
        <Footer/>
    </>
  )
}

export default Signup