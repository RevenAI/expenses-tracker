import {
    Flex,
    Text,
    Icon,
    MenuRoot,
    IconButton,
    MenuItem
} from '@chakra-ui/react'
import NavHoverDescBox from './NavHoverDescBox'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = ({navSize, icon, title, active, description, path}) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
    mt={30}
    flexDir="column"
    w="100%"
    alignItems={navSize === "small" ? "center" : "flex-start"}
    position="relative" // This ensures hover detection
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
        <MenuRoot>
            {/* <Link
            bgColor={active && "#AEC8CA"}
            p={3}
            borderRadius={8}
            _hover={{textDecor: "none", bgColor: "#AEC8CA"}}
            w={navSize === "large" && "100%"}
            >
                <IconButton 
                w="100%"
               
                >
                   <Flex>
                        <Icon as={icon} fontSize="xl" color={active ? "#AEC8CA" : "gray.50"} />
                        <Text ml={5} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
                   </Flex>
                </IconButton>
            </Link>
 */}     
            <NavLink 
                 to={path} 
                    style={({ isActive }) => ({
                        textDecoration: "none",
                        backgroundColor: isActive ? "#AEC8CA" : "transparent",
                        padding: "10px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        width: navSize === "large" ? "100%" : "auto",
                    })}
                    >
                    <IconButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "#AEC8CA" : "gray.50"} />
                            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </IconButton>
            </NavLink>
      
            <MenuItem
                py={0}
                border="none"
                w={200}
                h={200}
                ml={5}
                position="absolute"
                left="100%" // Positions it next to the menu
                top="0"
                opacity={isHovered ? 1 : 0}
                pointerEvents={isHovered ? "auto" : "none"} // Prevents interaction when hidden
                transition="opacity 0.2s ease-in-out"
            >
                <NavHoverDescBox icon={icon} title={title} description={description} />
            </MenuItem>

        </MenuRoot>
    </Flex>
  )
}

export default NavMenu 