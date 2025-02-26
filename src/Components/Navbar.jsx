import { Box, Text, Link, Button, Image, Heading, textDecoration, Circle } from "@chakra-ui/react"

import React from 'react'
import { Outlet } from 'react-router-dom'
import cart from "../assets/icons/shopping.svg"
import account from "../assets/icons/account.svg"
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
const Navbar = () => {
    const navigate = useNavigate();
    const cartProducts = useSelector(state => state.cart)
    return (
        <>
            <Box
                as="nav"
                // Keeps Navbar always on top
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                bg="rgba(0, 0, 0, 0.1)"  // Semi-transparent background
                h="90px"
                w="99.2vw"
                zIndex="1000"  // Ensures it's above the image
                pl={5}
                pr={5}
            >
                <Box justifyContent="space-between" alignItems="center" display="flex"
                    flexDirection="row"
                    w="40%"

                >
                    <Heading>
                        Vistora
                    </Heading>
                    <Box
                        justifyContent="space-between" alignItems="center" display="flex"
                        w="500px"
                    >
                        <Link
                            to="/Products"
                            onClick={() => navigate("/Products")}
                            fontSize="1.2rem"
                            _hover={{ textDecoration: 'none', color: "white" }}
                        >
                            EVERYTHING
                        </Link>
                        <Link
                            to="/Products"
                            onClick={() => navigate("/Products")}
                            fontSize="1.2rem"
                            _hover={{ textDecoration: 'none', color: "white" }}
                        >
                            MEN
                        </Link>
                        <Link
                            to="/Products"
                            onClick={() => navigate("/Products")}
                            fontSize="1.2rem"
                            _hover={{ textDecoration: 'none', color: "white" }}
                        >
                            WOMEN
                        </Link>
                        <Link
                            to="/Products"
                            onClick={() => navigate("/Products")}
                            fontSize="1.2rem"
                            _hover={{ textDecoration: 'none', color: "white" }}
                        >
                            ACCESSORIES
                        </Link>
                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    w={100}
                    h={90}
                >


                    <Button
                        bgColor="transparent"
                        h="50px"
                        w="30px"
                        onClick={() => navigate("/cart")}
                        p={0}
                        _hover={{ bgColor: "transparent" }}
                    >
                        <Box
                            as="span"
                            className="material-symbols-outlined"
                            sx={{
                                fontVariationSettings: "'FILL' 0, 'wght' 100, 'GRAD' 0, 'opsz' 48",
                                fontSize: "30px",
                                color: "black",
                                cursor: "pointer",
                                transition: "color 0.3s ease",
                                '&:hover': {
                                    color: "white",
                                },
                            }}
                        >
                            Shopping_Cart
                        </Box>

                        <Circle size="5" bg="red" color="white" position="relative" top="-13px" left="-10px">
                            {cartProducts.length}
                        </Circle>


                    </Button>
                    <Button
                        bgColor="transparent"
                        h="50px"
                        w="30px"
                        onClick={() => console.log("hi")}
                        p={0}
                        _hover={{ bgColor: "transparent" }}
                    >
                        <Box
                            as="span"
                            className="material-symbols-outlined"
                            sx={{
                                fontVariationSettings: "'FILL' 0, 'wght' 100, 'GRAD' 0, 'opsz' 48",
                                fontSize: "30px",
                                color: "black",
                                cursor: "pointer",
                                transition: "color 0.3s ease",
                                '&:hover': {
                                    color: "white",
                                },
                            }}
                        >
                            account_circle
                        </Box>

                    </Button>
                </Box>
            </Box >

        </>

    )
}

export default Navbar