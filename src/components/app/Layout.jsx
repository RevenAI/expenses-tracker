import { Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
   <Flex as="main" mt="80px" mb="40px">
    <Header />
     <Flex as="aside">
        <Sidebar />
    </Flex>

    <Flex as="section">
        <Outlet />
    </Flex>
    <Footer />
   </Flex>
  )
}

export default Layout