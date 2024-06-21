import React from 'react'
import { Box, Grid } from '@chakra-ui/react';
import FormHeading from './FormHeading';
import FormInput from './FormInput'

const Form = ({inputs, setInputs,errors, readonly, isRegistration}) => {

  return (
    <>
      <Box 
          maxW="3xl" 
          mx={{xl: "auto",  base: "5" }}
          mb={5}
          px={4} 
          py={12} 
          border="1px" 
          borderColor="gray.200" 
          borderRadius="lg"
          fontFamily={"font-family: Open Sans"}
      >
        <Grid templateColumns={"1"} gap={8} mx={4}>
          <Box>
            <FormHeading heading="Business Information" subHeading="Your Business details"/>
            <Grid templateColumns={{sm:"repeat(2, 1fr)"}} gap={4}>
              <FormInput 
                label="Business Name" 
                type="text"
                placeholder="Your Business Name" 
                value={inputs.companyname} 
                onChange={(e) => setInputs({...inputs, companyname:e.target.value})} 
                readOnly={readonly}
                errors={errors.state}
              />
              <FormInput 
                label="Business Type" 
                placeholder="Select Business Type" 
                type="text"
                value={inputs.category} 
                onChange={(e) => setInputs({...inputs, category:e.target.value})} 
                readOnly={readonly} 
                errors={errors.category} 
                isSelect="true" 
              />
            </Grid>
            <Grid templateColumns={{sm:"repeat(2, 1fr)"}} gap={4} mt={4}>
              <FormInput 
                label="Business city" 
                type="text"
                placeholder="Your Business city" 
                value={inputs.city} 
                onChange={(e) => setInputs({...inputs, city:e.target.value})} 
                readOnly={readonly} 
                errors={errors.city}
              />
              <FormInput 
                label="Business State" 
                type="text"
                placeholder="Your Business State" 
                value={inputs.state} 
                onChange={(e) => setInputs({...inputs, state:e.target.value})} 
                readOnly={readonly} 
                errors={errors.state}
              />
            </Grid>
            <FormInput 
                label="Business Address" 
                type="text"
                placeholder="Your Business Address" 
                value={inputs.address} 
                onChange={(e) => setInputs({...inputs, address:e.target.value})} 
                readOnly={readonly} 
                errors={errors.address}
              />
            <FormInput 
                label="Business Website" 
                type="url"
                placeholder="Your Business Website" 
                value={inputs.website} 
                onChange={(e) => setInputs({...inputs, website:e.target.value})} 
                readOnly={readonly} 
                errors={errors.website}
              />
            <FormInput 
                label="Business phone" 
                type="number"
                placeholder="Your Business phone" 
                value={inputs.phoneNo} 
                onChange={(e) => setInputs({...inputs, phoneNo:e.target.value})} 
                readOnly={readonly} 
                errors={errors.phoneNo}
              />
          </Box>
          <Box>
          <FormHeading heading="Personal Information" subHeading="Your personal details"/>
            <Grid templateColumns={{sm:"repeat(2, 1fr)"}} gap={4}>
              <FormInput 
                label="First Name" 
                type="text"
                placeholder="First Name" 
                value={inputs.firstname} 
                onChange={(e) => setInputs({...inputs, firstname:e.target.value})} 
                readOnly={readonly} 
                errors={errors.firstname}
              />
              <FormInput 
                label="Last Name" 
                placeholder="Last Name" 
                value={inputs.lastname} 
                onChange={(e) => setInputs({...inputs, lastname:e.target.value})} 
                readOnly={readonly} 
                errors={errors.lastname}
              />
            </Grid>
            <Grid templateColumns={{sm:"repeat(2, 1fr)"}} gap={4} mt={4}>
              <FormInput 
                label="Username" 
                type="text"
                placeholder="Your Username" 
                value={inputs.username} 
                onChange={(e) => setInputs({...inputs, username:e.target.value})} 
                readOnly={readonly} 
                errors={errors.username}
              />
              <FormInput 
                label="Your Email" 
                type="email"
                placeholder="Your Email" 
                value={inputs.email} 
                onChange={(e) => setInputs({...inputs, email:e.target.value})} 
                readOnly={readonly} 
                errors={errors.email}
              />
            </Grid>
            {
              isRegistration ?   
              <FormInput 
              label="Password" 
              type="password"
              placeholder="*********" 
              value={inputs.password} 
              onChange={(e) => setInputs({...inputs, password:e.target.value})} 
              readOnly={readonly} 
              errors={errors.password}
            /> : null
            }
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export default Form