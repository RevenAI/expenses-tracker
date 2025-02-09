import { useState } from "react";
import { Flex, IconButton, List, Text } from "@chakra-ui/react";
import { FaHome, FaClipboardList, FaClipboardCheck, FaPlaneDeparture, FaSlidersH, FaPhoneAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileFooter = () => {
    const menuProps = [
        { id: 1, title: "Home", icon: FaHome, path: "/" },
        { id: 2, title: "Expenses", icon: FaClipboardList, path: "/expenses" },
        { id: 3, title: "Trips", icon: FaPlaneDeparture, path: "/trips" },
        { id: 4, title: "Approval", icon: FaClipboardCheck, path: "/approval" },
        { id: 5, title: "Settings", icon: FaSlidersH, path: "/settings" },
        { id: 6, title: "Support", icon: FaPhoneAlt, path: "/support" },
    ];

    const pageSize = 3; 
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(1); 

    const nextPage = () => {
        setDirection(1);
        setCurrentPage((prev) => (prev + 1) % Math.ceil(menuProps.length / pageSize));
    };

    const prevPage = () => {
        setDirection(-1);
        setCurrentPage((prev) => (prev - 1 + Math.ceil(menuProps.length / pageSize)) % Math.ceil(menuProps.length / pageSize));
    };

    const startIndex = currentPage * pageSize;
    const paginatedMenus = menuProps.slice(startIndex, startIndex + pageSize);

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
            justifyContent="center"
            p={3}
            gap={2}
        >
            {/* Previous Button (Closer to Menus) */}
            <IconButton 
                aria-label="Previous" 
                size="lg" 
                variant="ghost" 
                onClick={prevPage} 
                color="blue.800"
                mr={10}
            >
                <FaChevronLeft />
            </IconButton>

            {/* Animated Menu Items */}
            <List.Root display="flex" flexDir="row" gap="3" listStyle="none" overflow="hidden" width="70%">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentPage}
                        initial={{ x: direction === 1 ? 50 : -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction === 1 ? -50 : 50, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }} 
                        style={{ display: "flex", gap: "12px" }}
                    >
                        {paginatedMenus.map((menu) => (
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
                                                _hover={{ bgColor: "#00000033" }}
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
                    </motion.div>
                </AnimatePresence>
            </List.Root>

            {/* Next Button (Closer to Menus) */}
            <IconButton 
                aria-label="Next" 
                size="lg" 
                variant="ghost" 
                onClick={nextPage} 
                color="blue.800"
                ml={10} 
            >
                <FaChevronRight />
            </IconButton>
        </Flex>
    );
};

export default MobileFooter;


