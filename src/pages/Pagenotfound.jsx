import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <Box className="pnf">
       <Box className="text-4xl m-auto">
              404 <br/>
              Page not found!
        </Box>

      <Link to="/" className="pnf-btn">
        Go Back
      </Link>
    </Box>
  );
};

export default Pagenotfound;
