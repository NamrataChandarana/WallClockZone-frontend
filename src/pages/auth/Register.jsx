import React from 'react'
import RegisterComponent from '../../components/RegisterComponent'
import Header from '../../components/Header'
import SubHeading from '../../components/SubHeading'
import Title from '../../components/Title'
import Footer from '../../components/Footer'

function Register() {
  return (
    <>
      <Header/>
      <SubHeading title="Wall Clock Zone" subTitle="User Register"/>
      <Title title="Register An Account" />
      <RegisterComponent />
      <Footer/>
    </>
  )
}

export default Register