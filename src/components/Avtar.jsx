import { Box } from "@chakra-ui/react";
const Avtar = ({name}) => {
    return(
        <>
            <Box
              as="div"
              className="relative inline-flex items-center justify-center overflow-hidden cursor-pointer"
              bg="gray.100"
              borderRadius="full"
              id="dropdownUserAvatarButton"
              data-dropdown-toggle="dropdownAvatar"
              px={3}
              py={2}
              ml="4"
            >
              <Box as="span" fontWeight="medium" color="black">
                {name.split(" ").map(word => word.charAt(0).toUpperCase()).join("")}
              </Box>
            </Box>
        </>
    )
}

export default Avtar