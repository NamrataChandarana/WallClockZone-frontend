import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "../redux/actions/user";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Box, Flex, Button } from '@chakra-ui/react';
import { useNavigate,Link } from "react-router-dom";
import Title from "../components/Title";
import { useState } from "react";
import Form from "../components/Form";
import { FaEdit } from "react-icons/fa";

function Profile() {
  const { user } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs , setInputs] = useState({
    firstname: '',
    lastname: '',
    companyname: '',
    phoneNo: '',
    username: '',
    password: '',
    category: '',
    city: '',
    state: '',
    address: '',
    email: '',
    website: ''
  })
  useEffect(() => {
    if (user) {
      setInputs({
        firstname: user.firstname || '',
        lastname: user.lastname || '',
        companyname: user.companyname || '',
        phoneNo: user.phoneNo || '',
        username: user.username || '',
        password: user.password || '',
        category: user.category || '',
        city: user.city || '',
        state: user.state || '',
        address: user.address || '',
        email: user.email || '',
        website: user.website || ''
      });
    }
  }, [user]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const handleUpdateClick = () => {
    navigate('/updateprofile');
  };

  return (
    <div>
      <section className="w-100 pl-5  ">
        <Title title="Profile"/>
        <div className="col-lg-10 mb-2">
            <div className="row d-flex m-0 p-0 ">
              {user?.status == true ? (
                <div className="col-sm-3 justify-content-end ">
                  <b>Your Visiblity: </b>
                  <button type="button" class="btn btn-success "> Approved</button>
                </div>
                ) : (
                  <div className="col-sm-3 justify-content-end">
                    <b>Your Visiblity: </b>
                    <button type="button" className="btn btn-danger ">UnApprove</button>
                  </div>
                ) }
                
              </div>
        </div>
        {
          user && 
          <>
            <Form inputs={inputs} setInputs={setInputs} errors='' readonly = "false" isRgistration="false"/>
            <Box width={"7rem"} mx={{xl: "290px",  base: "5" }}>
              <Flex>
                <Button type="submit" gap="5" pl="10" pr='0' width="full" mt={1} bg={"#00A9DA"} _hover={"#048fb6"} color="white" rounded="sm" onClick={handleUpdateClick}>
                  Edit
                  <Box bg="#0398c2" color="white" alignSelf="center" p="3"><FaEdit/></Box>
                </Button>
              </Flex> 
            </Box>
          </>
        }
      </section>
    </div>
  );
}

export default Profile;
