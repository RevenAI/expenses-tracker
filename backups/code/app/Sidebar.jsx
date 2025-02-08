
import { Flex, Text, Separator, defineStyle, IconButton, Avatar, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { FaBars, FaHome, FaClipboardList, FaClipboardCheck, FaPlaneDeparture, FaSlidersH, FaPhoneAlt } from "react-icons/fa";
import NavMenu from './NavMenu';
//import { ColorModeButton } from '../ui/color-mode';


const Sidebar = () => {
    const [navSize, changeNavSize] = useState("large");

    const avarterStyling = defineStyle({
        outlineWidth: "2px",
        outlineColor: "green",
        outlineOffset: "2px",
        outlineStyle: "solid",
        overflow: "hidden"  // This ensures image doesn't break the shape
      })

      const handleNavShrink = () => {
        changeNavSize((prevSize) => (prevSize === "small" ? "large" : "small"));
      };      

  return (
    <Flex
        pos="sticky"
        left="5"
        h="95vh"
        marginTop="2.5vh"
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
        borderRadius={ navSize === "small" ? "15px" : "30px" }
        w={ navSize === "small" ? "75px" : "200px" }
        flexDir="column"
        justifyContent="space-between"
        bg="#FFD700"
    >

        <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
        >

         <IconButton 
            aria-label="Menu Button"
            background="none"
            color="black"
            border="1px solid black"
            mt={5}
            _hover={{ backgroundColor: 'gray.50' }}
            onClick={handleNavShrink}
          >
            <FaBars />
          </IconButton>

                <NavMenu navSize={navSize} icon={FaHome} title="Dashboard" path="/" description="It works!" active />
                <NavMenu navSize={navSize} icon={FaClipboardList} title="Expenses" path="/expenses" description="It works!" />
                <NavMenu navSize={navSize} icon={FaPlaneDeparture} title="Trips" path="/trips" description="It works!" />
                <NavMenu navSize={navSize} icon={FaClipboardCheck} title="Approval" path="/approval" description="It works!" />
                <NavMenu navSize={navSize} icon={FaSlidersH} title="Settings" path="/settings" description="It works!" />
                <NavMenu navSize={navSize} icon={FaPhoneAlt} title="Support" path="/support" description="It works!" />
        </Flex>

        <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
        >
            
            <Separator 
            variant="solid" 
            colorPalette="gray" 
            borderColor="black" 
            size="lg" 
            display={ navSize === "small" ? "none" : "flex"} 
            />

            <Flex mt={4} align="center">
                <Avatar.Root css={avarterStyling}>  
                <Avatar.Fallback name="Tijani Abidemi" />
                <Avatar.Image 
                src="/profile-pics/abby.png"
                />
                </Avatar.Root>

                <Flex display={ navSize === "small" ? "none" : "flex"}  flexDir="column" ml={4}>
                    <Heading as="h3" size="sm">Tijani Abidemi</Heading>
                    <Text color="gray">Admin</Text>
                </Flex>

            </Flex>

        </Flex>
    </Flex>
  )
}

export default Sidebar
     
