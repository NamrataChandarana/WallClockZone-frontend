import React,{ useRef }  from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Text, Flex } from '@chakra-ui/react';
import Title from './Title';
import { FaCheck } from 'react-icons/fa';

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_EDITOR_API_KEY);
  const formRef = useRef()

  if(formRef.current){
    if (state.succeeded) {
        formRef.current.elements.email.value=""
        formRef.current.elements.name.value=""
        formRef.current.elements.message.value = ""
    }
  }

  return (
    <Box maxW="xl" mx="auto" mb="16">
        <Title title="Contact Us" />
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
        <Flex spacing={8} mb={8} gap="5">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input 
              type="text" 
              name="name" 
              placeholder="Name" 
              focusBorderColor="indigo.400"
              required
            />
            <ValidationError 
              prefix="Name" 
              field="name" 
              errors={state.errors} 
              className="text-red" 
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input 
              type="email" 
              name="email" 
              placeholder="Email" 
              focusBorderColor="indigo.400"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email" 
              errors={state.errors} 
              className="text-red" 
            />
          </FormControl>
        </Flex>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea 
            name="message" 
            placeholder="Your message" 
            focusBorderColor="indigo.400"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message" 
            errors={state.errors} 
            className="text-red" 
          />
        </FormControl>
        <Button 
          type="submit" 
          isLoading={state.submitting} 
          gap="5" 
          pl="10" 
          pr='0' 
        //   width="full" 
          mt="5" 
          bg={"#00A9DA"} 
          _hover={"#048fb6"} 
          color="white" 
          rounded="sm"
        >
          Submit
          <Box bg="#0398c2" color="white" alignSelf="center" p="3"><FaCheck /></Box>
        </Button>
        <ValidationError errors={state.errors} />
        {state.succeeded && <Text textAlign="center" my={2} fontSize="lg">Thanks for your submission!</Text>}
      </form>
    </Box>
  );
}

export default ContactForm;
