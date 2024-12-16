import React,{ useRef }  from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Text, Flex, Heading, VStack } from '@chakra-ui/react';
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
    <Box maxW="xl" mx="auto" mb="12" px={"10"} >
       <VStack spacing={1} maxW="3xl" mx="auto" textAlign="center" mb={12}>
          <Heading as="h2" fontSize={{ base: '4xl', md: '4xl' }} fontWeight="semibold" fontFamily="Inter" >
            Contact Us
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'lg' }} color="gray.600" fontFamily="Inter" >
            Quick Solutions, Just a Message Away
          </Text>
        </VStack>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col" >
        <Flex spacing={6} mb={8} gap="4">
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
         {/* <VStack spacing={6} mt={6}> */}
            <Button
              type="submit" 
              isLoading={state.submitting}
              size="lg"
              colorScheme="blue"
              height="45px"
              px={12}
              mt={3}
              fontSize="lg"
              bgColor={"#18181B"}
              _hover={{ bg: "#18181B" }}
            >
              Submit
            </Button>
          {/* </VStack> */}
        <ValidationError errors={state.errors} />
        {state.succeeded && <Text textAlign="center" my={2} fontSize="lg">Thanks for your submission!</Text>}
      </form>
    </Box>
  );
}

export default ContactForm;
