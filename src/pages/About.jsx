import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";
import Title from "../components/Title";
import SubHeading from "../components/SubHeading";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMyLocation,  MdEmail } from "react-icons/md";

function About() {
  return (
    <>
      <SubHeading title="Wall Clock Zone" subTitle="About Us"/>
       <Box id="about" className="about" mb="10"  mx="auto" p={{base:7, sm: 10, md:10}}>
          <Title title="About Us"/>
          <Flex className="row " flexDirection={{ base: "column", lg: "row" }} justifyContent={"center"}>
            <Box className="col-lg-4" >
              <Image
                src={require("./asset/img1.jpeg")}
                className="img-fluid animated"
                alt="about"
                height={{sm:300,md:350}}
                display="flex"
                mx="auto"
              />
            </Box>
            <Box className="col-lg-6" pt={{ base: 4, lg: 0 }} fontFamily={["Open Sans", "sans-seri"]} fontSize={{base:"sm", md:"lg"}}>
              <Text textAlign="justify" >
                Welcome to our platform, where we facilitate connections between suppliers and buyers within the wall clock industry across India. Recognizing the fragmented nature of this business, our goal is to bridge regional gaps and provide a seamless network for business expansion.
              </Text>
              <Text textAlign="justify" mt={4}>
                Our mission is to revolutionize the wall clock industry by offering a dynamic marketplace. We aim to empower businesses with diverse options for buyers and a robust search database to facilitate global growth.
              </Text>
              {/* <Text textAlign="justify" mt={4}>
                We are committed to empowering our users with a user-friendly interface that allows businesses to manage their profiles effectively. Whether you're an established company or a startup, our platform supports your journey by keeping you informed about market trends and facilitating growth opportunities.
              </Text> */}
              <Stack spacing={2} fontWeight="xs" >
              <Flex gap="2" fontSize="2xl"  >
                <MdMyLocation mt="2" color="#00A9DA" />
                <Text fontSize={{base:"sm", md:"md"}}>1234 North Avenue Luke Lane South Bend, IN 360001</Text>
              </Flex>
              
              <Flex gap="2" fontSize="2xl">
                <FaPhoneAlt color="#00A9DA"/>
                <Text fontSize={{base:"sm", md:"md"}}>1234567894</Text>
              </Flex>
              
              <Flex gap="2" fontSize="2xl">
                <MdEmail color="#00A9DA"/>
                <Text fontSize={{base:"sm", md:"md"}}>support@wallclockzone.com</Text>
              </Flex>
             
            </Stack>
            </Box>
           
          </Flex>
      </Box>
    </>
  );
}

export default About;
