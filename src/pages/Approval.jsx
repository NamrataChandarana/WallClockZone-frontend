import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Box, Text, Image, Flex } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SubHeading from '../components/SubHeading'

const Approval = () => {
  return (
    <>
        <Header />
        <SubHeading title="Wall Clock Zone" subTitle="Approval"/>
        <Box>
            <Box>
                <Image
                    src={require("./asset/registration-approval.png")}
                    className="img-fluid animated"
                    alt="about"
                    height={{sm:300,md:400}}
                    display="flex"
                    mx="auto"
                />
            </Box>
            <Flex className="col-lg-12" flexDirection={'column'} justifyContent="center" alignItems="center" gap="3">
                <Text fontSize="4xl" placeContent="center">Registration Successful!</Text>
                <Text fontSize="xl" width="37rem" textAlign="center">We will contact you shortly. Once confirmed, your business will be visible to other users, who can then contact you directly.</Text>
                <Text>You can check your visiblity <Link as={RouterLink} to="/profile" color="blue.500">Here</Link></Text>
            </Flex>
        </Box>
        <Footer/>
    </>
  )
}

export default Approval