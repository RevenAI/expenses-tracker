import { Box, Card, Heading, VStack, Image, Link as StyleLink, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaHome, FaClipboardList, FaClipboardCheck, FaPlaneDeparture, FaSlidersH, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/app-logos/expenses-tracker-logo1.png";

const Sidebar = () => {
  return (
    <Box 
      as="aside"
      w={{ base: "full", md: "250px" }} 
      h="100vh" 
      p="4" 
      bg="gray.800"
      color="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      boxShadow="lg"
    >
      {/* User Profile Card */}
      <Card.Root w="full" p="4" bg="gray.700" borderRadius="md" textAlign="center">
        <Image
          src="https://bit.ly/naruto-sage"
          boxSize="80px"
          borderRadius="full"
          alt="Naruto Uzumaki"
          mx="auto"
        />
        <Heading as="h4" size="md" mt="2">
          Muhammad Lawal
        </Heading>
      </Card.Root>

      {/* Navigation Links */}
      <VStack as="nav" spacing="4" mt="6" align="stretch" w="full">
        <StyleLink as={NavLink} to="/index" _hover={{ textDecor: "none", bg: "buttonHoverBg" }} p="3" borderRadius="md">
          <Icon as={FaHome} mr="2" /> Home
        </StyleLink>
        <StyleLink as={NavLink} to="/expenses" _hover={{ textDecor: "none", bg: "buttonHoverBg" }} p="3" borderRadius="md">
          <Icon as={FaClipboardList} mr="2" /> Expenses
        </StyleLink>
        <StyleLink as={NavLink} to="/trips" _hover={{ textDecor: "none", bg: "buttonHoverBg" }} p="3" borderRadius="md">
          <Icon as={FaPlaneDeparture} mr="2" /> Trips
        </StyleLink>
        <StyleLink as={NavLink} to="/approval" _hover={{ textDecor: "none", bg: "buttonHoverBg" }} p="3" borderRadius="md">
          <Icon as={FaClipboardCheck} mr="2" /> Approval
        </StyleLink>
        <StyleLink as={NavLink} to="/settings" _hover={{ textDecor: "none", bg: "buttonHoverBg" }} p="3" borderRadius="md">
          <Icon as={FaSlidersH} mr="2" /> Settings
        </StyleLink>
        <StyleLink as={NavLink} to="/support" _hover={{ textDecor: "none", bg: "buttonHoverBg" }} p="3" borderRadius="md">
          <Icon as={FaPhoneAlt} mr="2" /> Support
        </StyleLink>
      </VStack>

      {/* App Logo */}
      <Image src={logo} alt="App Logo" mt="auto" boxSize="80px" />
    </Box>
  );
};

export default Sidebar;









