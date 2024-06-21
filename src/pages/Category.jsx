import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { getCategories } from "../redux/actions/category";
import { Box, Container, Grid, Heading, Image } from "@chakra-ui/react";
import Desinger from './asset/desinger3.webp';
import rowMaterialDealer from './asset/rowMaterial.avif'
import Transpoter from './asset/transpoter.avif'
import Wholesaler from './asset/wholesaler2.jpg'
import Manufacuture from './asset/Manufacture.jpg'
import CategorySkeleton from "../components/CategorySkeleton";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Title from "../components/Title";
import SubHeading from "../components/SubHeading";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Category() {

  const dispatch = useDispatch();
  const {categories} = useSelector((state) => state.category)
  const {loading} = useSelector((state)=> state.category);

  useEffect(() => {
    dispatch(getCategories());
  },[dispatch])

  if(loading){
    return (
      <>
        <Header/>
        <SubHeading title="Wall Clock Zone" subTitle="Category"/>
        <CategorySkeleton />
        <Footer/>
      </>
     
      
    )
  }

  const imageMapping = {
    "Manufacturer": Manufacuture,
    "Wholesaler": Wholesaler,
    "Transpoter": Transpoter,
    "Designer": Desinger,
    "Raw material suppliers": rowMaterialDealer,
    // Add more mappings as needed
  };

  return (
    <Box>
      <Header />
      <SubHeading title="Wall Clock Zone" subTitle="Category"/>
      <Title title="Category"/>
      <Box className="container">
        <Box className="row container">
          {categories.length > 0  ? 
            <Box w="full">
              <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                  gap={{ base: 6, lg: 8 }}
                >
                  {categories.map((category) => (
                   <Link to={`/category/${category.slug}`} key={category._id}>
                     <Box
                      className="grid gap-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
                     >
                      <LazyLoadImage
                        src={imageMapping[category.name]}
                        alt={category.name}
                        w="full"
                        h=""
                        objectfit="cover"
                        ratio={3 / 2}
                        effect="blur"
                      />
                      <Box p={4} bg="white" _dark={{ bg: "gray.950" }}>
                        <Heading as="h3" size="md" fontWeight="semibold">
                          {category.name}
                        </Heading>
                      </Box>
                     </Box>
                   </Link>
  
                  ))}
                </Grid>
              </Container>
            </Box>
            : 
            <Box className="text-3xl m-auto">
              No categories yet!
            </Box>
          }
        </Box>
      </Box>
      <Footer />
    </Box>
    
  );
}

export default Category;
