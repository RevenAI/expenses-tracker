import {
    Flex,
    Text,
    Icon,
    Link,
    MenuRoot,
    IconButton,
    MenuItem
} from '@chakra-ui/react'
import NavHoverDescBox from './NavHoverDescBox'


const NavMenu = ({navSize, icon, title, active, description}) => {
  return (
    <Flex
    mt={30}
    flexDir="column"
    w="100%"
    alignItems={navSize === "small" ? "center" : "flex-start"}
    >
        <MenuRoot>
            <Link
            bgColor={active && "#AEC8CA"}
            p={3}
            borderRadius={8}
            _hover={{textDecor: "none", bgColor: "#AEC8CA"}}
            w={navSize === "large" && "100%"}
            >
                <IconButton w="100%">
                   <Flex>
                        <Icon as={icon} fontSize="xl" color={active ? "#AEC8CA" : "gray.50"} />
                        <Text ml={5} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
                   </Flex>
                </IconButton>
            </Link>
            <MenuItem 
             py={0}
             border="none"
             w={200}
             h={200}
             ml={5}
             bgColor="red"
            >
                <NavHoverDescBox icon={icon} title={title} description={description}/>
            </MenuItem>
        </MenuRoot>
    </Flex>
  )
}

export default NavMenu 