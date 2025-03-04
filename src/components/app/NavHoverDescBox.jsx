import { Flex, Icon, Heading, Text } from "@chakra-ui/react"



const NavHoverDescBox = ({icon, title, description}) => {
  return (
    <>
      <Flex
   /*  pos="absolute"
    mt="calc(100px - 7.5px)"
    ml="-10px"
    width={0}
    height={0}
    borderTop="10px solid transparent"
    borderBottom="10px solid transparent"
    borderRight="10px solid #82AAAD" */
    />

      <Flex
      h={200}
      w="100%"
      flexDir="column"
      alignItems="center"
      justify="center"
      backgroundColor="#00000033"
      borderRadius="10px"
      color="#fff" 
      textAlign="center"
      zIndex="3000"
      >
          <Icon as={icon} fontSize="3xl" mb={4} />
          <Heading size="md" fontWeight="normal">{title}</Heading>
          <Text>{description}</Text>
      </Flex>
    </>

  )
}

export default NavHoverDescBox

