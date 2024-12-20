import React from 'react'
import LoginComponent from '../../components/LoginComponent'
import SubHeading from '../../components/SubHeading'
import Header from '../../components/Header'
import Title from '../../components/Title'
import Footer from '../../components/Footer'

function Login() {
  return (
    <>
        <Header/>
        <SubHeading title={"Wall Clock Zone"} subTitle={"User Login"}/>
        <Title title="Sign In"/>
        <LoginComponent />
        <Footer/>
    </>
  )
}
export default Login