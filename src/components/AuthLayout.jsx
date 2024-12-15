import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { Puff} from 'react-loader-spinner'
import { Box } from "@chakra-ui/react";

const AuthLayout = ({ userRole= false, children}) => {
   const navigate = useNavigate();
   const [loader, setLoader] = useState(true)
   const { isAuthenticated,user} = useSelector((state) => state.user);
   const isAdmin = user?.role;

   useEffect(()=>{

    // if(loading === undefined){
    //     return;
    // }

    // if (loading === false) {
        if (!isAuthenticated) {
            navigate("/login");
            return;
        }
    // }

    if (userRole === true && isAdmin !== "admin" ){
        navigate("/")
        return;
    }
    setLoader(false)
   },[navigate, isAuthenticated, isAdmin, userRole]) 

    return loader ?  
    <Box  minH="100vh" width="full" display="flex" alignItems="center" justifyContent="center">
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#00A9DA"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          
          
        />
    </Box> 
    
    : <>{children}</>
}

export default AuthLayout;