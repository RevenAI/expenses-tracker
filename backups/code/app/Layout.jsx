import { Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
   <Flex>
     <Flex as="aside">
        <Sidebar />
    </Flex>

    <Flex as="main">
        <Outlet />
    </Flex>
   </Flex>
  )
}

export default Layout