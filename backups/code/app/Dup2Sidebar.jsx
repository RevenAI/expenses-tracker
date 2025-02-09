
import { Flex, Text, defineStyle, Avatar, Heading, Box } from '@chakra-ui/react';
import { FaHome, FaClipboardList, FaClipboardCheck, FaPlaneDeparture, FaSlidersH, FaPhoneAlt } from "react-icons/fa";
import NavMenu from './NavMenu';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const navSize = useSelector((state) => state.sidebar.navSize);

    const avarterStyling = defineStyle({
        outlineWidth: "2px",
        outlineColor: "blue.800",
        outlineOffset: "2px",
        outlineStyle: "solid",
        overflow: "hidden"
      });

  return (
    <Flex
        pos="sticky"
        left="5"
        h="100vh"
        boxShadow="0px 4px 10px rgba(0,0,0,0.1)"
        w={ navSize === "small" ? "4.7em" : "12.5em" }
        flexDir="column"
        justifyContent="space-between"
        bg="#FFD700"
    >

    <Flex
        p="5%"
        pt="15px"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
        >

            {/* Avater section */}
            <Flex align="center">
                <Avatar.Root css={avarterStyling}>  
                <Avatar.Fallback name="Tijani Abidemi" />
                <Avatar.Image 
                src="/profile-pics/abby.png"
                />
                </Avatar.Root>

                <Flex display={ navSize === "small" ? "none" : "flex"}  flexDir="column" ml={4}>
                    <Heading as="h3" size="sm" color="blue.800">Tijani Abidemi</Heading>
                    <Text color="gray">Admin</Text>
                </Flex>

            </Flex>

        </Flex>

        <Flex
        p="5%"
        flexDir="column"
        alignItems="center"
        as="nav"
        flex="1"
        >

               <Box as="div">
               <NavMenu navSize={navSize} icon={FaHome} title="Dashboard" path="/" description="It works!" active />
                <NavMenu navSize={navSize} icon={FaClipboardList} title="Expenses" path="/expenses" description="It works!" />
                <NavMenu navSize={navSize} icon={FaPlaneDeparture} title="Trips" path="/trips" description="It works!" />
                <NavMenu navSize={navSize} icon={FaClipboardCheck} title="Approval" path="/approval" description="It works!" />
                <NavMenu navSize={navSize} icon={FaSlidersH} title="Settings" path="/settings" description="It works!" />
                <NavMenu navSize={navSize} icon={FaPhoneAlt} title="Support" path="/support" description="It works!" />
               </Box>
        </Flex>

    </Flex>
  )
}

export default Sidebar
     
