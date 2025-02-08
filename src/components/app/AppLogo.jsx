import { Box, Text } from "@chakra-ui/react";

const AppLogo = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, gold.400, white)"
      p={4}
      borderRadius="lg"
      boxShadow="lg"
      position="relative"
      overflow="hidden"
    >

      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="transparent"
        backgroundImage="radial-gradient(circle, rgba(255,215,0,0.3) 1px, transparent 1px)"
        backgroundSize="25px 25px"
        opacity="0.3"
      />

      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="wide"
        color="blue.800" 
        textShadow="3px 3px 8px rgba(255, 215, 0, 0.9)"
        zIndex="1"
      >
        Tracker
      </Text>

      <Text
        fontSize="3xl"
        fontWeight="extrabold"
        color="red.700" 
        textShadow="3px 3px 10px rgba(255,0,0,0.9)" 
        transform="rotate(-5deg)"
        ml={1}
        zIndex="1"
      >
        X
      </Text>
    </Box>
  );
};

export default AppLogo;

