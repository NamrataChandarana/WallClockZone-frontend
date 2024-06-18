import React from 'react'
import { useState } from 'react';
import { Flex, Box, Text, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const Carousels = () => {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
          opacity: 0.8,
          bg: "black",
        },
      };
      const slides = [
        {
          img: require("./asset/hero-img.jpg"),
        },
        {
          img: require("./asset/hero-img2.jpg"),
        }
      ];
      const [currentSlide, setCurrentSlide] = useState(0);
      const slidesCount = slides.length;
    
      const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
      };
    
      const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
      };
    
      const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
      };
  return (
    <>
        <Flex
          w="full"
          bg="#edf3f8"
          _dark={{
            bg: "#3e3e3e",
          }}
          alignItems="center"
          justifyContent="center"
          mb="0"
          
        >
          <Flex w="full" overflow="hidden" pos="relative" fontFamily={"font-family: Open Sans"} >
            <Flex h="600px" w="full" {...carouselStyle} >
              {slides.map((slide, sid) => (
                <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none" position="relative" >
                  <Text
                    color="white"
                    fontSize="xs"
                    p="8px 12px"
                    pos="absolute"
                    top="0"
                  >
                    {sid + 1} / {slidesCount}
                  </Text>
                  <Image
                    src={slide.img}
                    alt="carousel image"
                    boxSize="full"
                    objectFit="cover"
                    objectPosition="60%"
                    zIndex="100"
                  />
                  <Text
                    color="white"
                    fontSize={{base:"2xl", md:"4xl"}}
                    p="10px 50px"
                    pos="absolute"
                    bottom="150"
                    fontWeight="bold"
                    zIndex="100"
                    >
                    Your Digital Hub for<br/> Connectivity and Growth
                  </Text>
                  <Text
                    color="white"
                    fontSize={{base:"sm", md:"md"}}
                    p="10px 50px"
                    pos="absolute"
                    bottom="130"
                    zIndex="100"
                  >Join Now and Start Growing!</Text>
                <Box 
                    width={"9rem"}
                    color="white"
                    fontSize="md"
                    p="10px 50px"
                    pos="absolute"
                    bottom="90"
                    zIndex="100"
                >
                  <Flex>
                    <Link to="/register"> 
                      <Button type="submit" gap="5" pl="10" pr='0' width="full" mt={1} bg={"#00A9DA"} _hover={"#048fb6"} color="white" rounded="sm">
                        Register
                        <Box bg="#0398c2" color="white" alignSelf="center" p="3"><FaChevronRight /></Box>
                      </Button>
                    </Link> 
                  </Flex> 
                </Box>
                </Box>

              ))}
            </Flex >
            <Text {...arrowStyles} left="0" onClick={prevSlide} zIndex="999">
              &#10094;
            </Text>
            <Text {...arrowStyles} right="0" onClick={nextSlide} zIndex="999">
              &#10095;
            </Text>
            <Box
                background="black"
                width="100%"
                height="100%"
                position="absolute"
                top="0"
                bottom="50%"
                left="0"
                right="0"
                zIndex="0"
                opacity="0.2"
            ></Box>

          </Flex>
        </Flex>
        
        
    </>
   
    
  )
}

export default Carousels