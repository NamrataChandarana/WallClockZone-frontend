import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import Loader from "./Loader";

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
    <Loader/>
    
    : <>{children}</>
}

export default AuthLayout;