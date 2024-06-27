import { Box, Skeleton  } from "@chakra-ui/react";

const Avtar = ({name, loading}) => {

    return loading ? 
     ( <Box
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
        <Skeleton py="2" px="3" color="white" bg="red.500"rounded="full"></Skeleton>
      </Box>):(
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