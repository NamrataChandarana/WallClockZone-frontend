import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import Cookies from 'js-cookie';
import { useSelector } from "react-redux"
import {ThreeCircles} from 'react-loader-spinner'
import { Box } from "@chakra-ui/react";

const AuthLayout = ({ userRole= false, children}) => {
   const navigate = useNavigate();
   const [loader, setLoader] = useState(true)
   const { isAuthenticated, user } = useSelector((state) => state.user);
   const isAdmin = user?.role;

   useEffect(()=>{

    if (isAuthenticated !== true) {
        navigate("/login")
        return;
    }
    if (userRole === true && isAdmin !== "admin" ){
        navigate("/")
        return;
    }
    setLoader(false)
    },[navigate, isAuthenticated]) 

    return loader ?  
    <Box display="flex" placeContent="center">
        <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#00A9DA"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}   
            wrapperClass=""
        />
    </Box> 
    
    : <>{children}</>
}

export default AuthLayout;