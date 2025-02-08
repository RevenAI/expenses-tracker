

import { Box, Card, Heading, VStack, Image, Icon } from "@chakra-ui/react";
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
    {/*   <Card w="full" p="4" bg="gray.700" borderRadius="md" textAlign="center"> */}
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
   {/*    </Card> */}

      {/* Navigation Links */}
      <VStack as="nav" spacing="4" mt="6" align="stretch" w="full">
        <NavLink to="/index" style={{ textDecoration: "none" }}>
          <Box p="3" borderRadius="md" _hover={{ bg: "gray.600" }} display="flex" alignItems="center">
            <Icon as={FaHome} mr="2" /> Home
          </Box>
        </NavLink>

        <NavLink to="/expenses" style={{ textDecoration: "none" }}>
          <Box p="3" borderRadius="md" _hover={{ bg: "gray.600" }} display="flex" alignItems="center">
            <Icon as={FaClipboardList} mr="2" /> Expenses
          </Box>
        </NavLink>

        <NavLink to="/trips" style={{ textDecoration: "none" }}>
          <Box p="3" borderRadius="md" _hover={{ bg: "gray.600" }} display="flex" alignItems="center">
            <Icon as={FaPlaneDeparture} mr="2" /> Trips
          </Box>
        </NavLink>

        <NavLink to="/approval" style={{ textDecoration: "none" }}>
          <Box p="3" borderRadius="md" _hover={{ bg: "gray.600" }} display="flex" alignItems="center">
            <Icon as={FaClipboardCheck} mr="2" /> Approval
          </Box>
        </NavLink>

        <NavLink to="/settings" style={{ textDecoration: "none" }}>
          <Box p="3" borderRadius="md" _hover={{ bg: "gray.600" }} display="flex" alignItems="center">
            <Icon as={FaSlidersH} mr="2" /> Settings
          </Box>
        </NavLink>

        <NavLink to="/support" style={{ textDecoration: "none" }}>
          <Box p="3" borderRadius="md" _hover={{ bg: "gray.600" }} display="flex" alignItems="center">
            <Icon as={FaPhoneAlt} mr="2" /> Support
          </Box>
        </NavLink>
      </VStack>

      {/* App Logo */}
      <Image src={logo} alt="App Logo" mt="auto" boxSize="80px" />
    </Box>
  );
};

export default Sidebar;

