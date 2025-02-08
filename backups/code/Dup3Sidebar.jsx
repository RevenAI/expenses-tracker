import { Box, VStack, Image, Link as StyleLink, Icon, Text, Flex, Bleed, Heading, Card } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaHome, FaClipboardList, FaClipboardCheck, FaPlaneDeparture, FaSlidersH, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/app-logos/expenses-tracker-logo1.png";

const Sidebar = () => {
  const navItems = [
    { to: "/index", icon: FaHome, label: "Home" },
    { to: "/expenses", icon: FaClipboardList, label: "Expenses" },
    { to: "/trips", icon: FaPlaneDeparture, label: "Trips" },
    { to: "/approval", icon: FaClipboardCheck, label: "Approval" },
    { to: "/settings", icon: FaSlidersH, label: "Settings" },
    { to: "/support", icon: FaPhoneAlt, label: "Support" }
  ];

  return (
    <Box 
      as="div"
      w={{ base: "full", md: "100px" }}
      h="100vh"
      p={4}
      //bg="background"
      bg="red"
      color="green"
      display="flex"
      flexDirection="column"
      boxShadow="lg"
    >
      {/* User Profile */}
 {/*      <Flex direction="column" align="center" mb={4}>
      <Card.Root 
        p={3} 
        borderRadius="xl" 
        boxShadow="md" 
        bg="white" 
        maxW="140px"
        transition="all 0.3s"
        _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
      >
        <Card.Body p={2} textAlign="center">
          <Image
            src="/profile-pics/abby.png"
            boxSize="50px"
            borderRadius="full"
            alt="Abby Profile"
            mx="auto"
          />
        </Card.Body>
        <Card.Description textAlign="center">
          <Text fontSize="sm" fontWeight="bold" color="gray.700">
            Abby IT
          </Text>
        </Card.Description>
      </Card.Root>
    </Flex> */}
      
      
      <Bleed inline="10">
        <Heading color="text" bg="red">This is a divider</Heading>
      </Bleed>
      
      {/* Navigation Links */}
      <VStack as="nav" spacing={3} align="stretch">
        {navItems.map(({ to, icon, label }) => (
          <StyleLink 
            as={NavLink} 
            to={to} 
            key={to} 
            display="flex" 
            alignItems="center" 
            p={3} 
            borderRadius="md" 
            _hover={{ bg: "gray.700", textDecoration: "none" }}
            _activeLink={{ bg: "gray.600" }}
          >
            <Icon as={icon} mr={3} />
            <Text>{label}</Text>
          </StyleLink>
        ))}
      </VStack>
      
      <Image src={logo} alt="App Logo" mt="auto" boxSize="80px" alignSelf="center" />
    </Box>
  );
};

export default Sidebar;


