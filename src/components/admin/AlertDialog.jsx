import React from 'react'
import { Button, AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogOverlay, AlertDialogBody, AlertDialogHeader } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

const AlertDialogComp = ({label, onClickFunc, color}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  return (
    <>
      <Button colorScheme='red' onClick={onOpen} bg={color} _hover={{bg:`${color}.600` }}>
        {label}
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='md' fontWeight='bold' bg="#00A9DA" >
              {label} User
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? 
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button bg={color}  onClick={() => {onClickFunc(); onClose();}} ml={3} color="white">
                {label}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default AlertDialogComp