import { Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
   <Flex 
   as="main" 
   mt={{md: "80px", lg: "80px", xl: "85px"}}
   mb={{md: "40px", lg: "40px", xl: "45px"}}
   >
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

