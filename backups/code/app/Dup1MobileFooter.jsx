import { Flex, IconButton, List, Text } from "@chakra-ui/react";
import { FaHome, FaClipboardList, FaClipboardCheck, FaPlaneDeparture, FaSlidersH, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileFooter = () => {
    const menuProps = [
        { id: 1, title: "Home", icon: FaHome, path: "/" },
        { id: 2, title: "Expenses", icon: FaClipboardList, path: "/expenses" },
        { id: 3, title: "Trips", icon: FaPlaneDeparture, path: "/trips" },
        { id: 4, title: "Approval", icon: FaClipboardCheck, path: "/approval" },
        { id: 5, title: "Settings", icon: FaSlidersH, path: "/settings" },
        { id: 6, title: "Support", icon: FaPhoneAlt, path: "/support" },
    ];

  return (
    <Flex
      display={{ base: "flex", lg: "none" }}
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bgColor="#FFD700"
      w="100%"
      minH="3em"
      zIndex="1000"
      boxShadow="0px -4px 10px rgba(0,0,0,0.1)"
      alignItems="center"
      justifyContent="space-around"
      p={3}
    >
      <List.Root 
      display="flex" 
      flexDir="row" 
      gap="4"
      listStyle="none"
      >
        {menuProps.map((menu) => (
          <List.Item key={menu.id} textAlign="center">
            <NavLink to={menu.path}>
              {({ isActive }) => (
                <Flex direction="column" align="center" color={isActive ? "blue.800" : "black"}>
                  <IconButton 
                    aria-label={menu.title} 
                    size="lg" 
                    variant="ghost" 
                    colorScheme={isActive ? "white" : "blue.800"} 
                    bgColor={isActive && "#00000033"} 
                    _hover={{bgColor: "#00000033"}}
                    color="blue.800"
                  >
                    <menu.icon />
                  </IconButton>
                  <Text fontSize="sm" color="blue.800" fontWeight="bold">{menu.title}</Text>
                </Flex>
              )}
            </NavLink>
          </List.Item>
        ))}
      </List.Root>
    </Flex>
  );
};

export default MobileFooter;

