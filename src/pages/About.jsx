import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Title from "../components/Title";
import SubHeading from "../components/SubHeading";

function About() {
  return (
    <>
      <SubHeading title="Wall Clock Zone" subTitle="About Us"/>
       <Box id="about" className="about">
          <Title title="About Us"/>
          <Flex className="row content" flexDirection={{ base: "column", lg: "row" }} mx={10}>
            <Box className="col-lg-6" >
              <Image
                src={require("./asset/img1.jpeg")}
                className="img-fluid animated"
                alt="about"
                // height={300}
              />
            </Box>
            <Box className="col-lg-6" pt={{ base: 4, lg: 0 }} fontFamily={["Open Sans", "sans-seri"]}>
              <Text textAlign="justify" >
                WALL CLOCK ZONE has a world of fabulous designs of wall clocks
                for the changing times. it has hand the philosophy
                of changing the way people look at wall clocks. The
                metamorphosis of having just a functional piece of watch to
                haveof the changing preferences of the people into the various
                that are continuously being updated.
              </Text>
              <Text textAlign="justify" mt={4}>
                WALL CLOCK ZONE with state-of-art production facility in the
                industrious state of Gujarat has computerized controlled
                injection molding system for meeting demand of market. The
                company had phased expansion in its span of twenty years and has
                also earned the confidence and faith of the people at large.
                Today it has a large export market spread over
                various African countries and also in the United Kingdom. The
                Middle East also is highly receptive of the products under the
                brand name WALL CLOCK ZONE.
              </Text>
              <Text textAlign="justify" mt={4}>
                Today at the turn of the century it has exploited
                enticingly most of the geometrical shapes with a wide range of
                colors and designs. Trends contemporary, Antique and a myriad
                types are today available the bran of it. The
                millennium collection aims at satisfying the various need of the
                customers cut across the globe.it is working hard
                to master the craftsmanship of time.
              </Text>
    
              {/* <Link href="/" className="btn-learn-more">
                Learn More
              </Link> */}
            </Box>
          </Flex>
      </Box>
    </>
  );
}

export default About;
