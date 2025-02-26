import { Box, Text, Link, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import cart from "../assets/icons/shopping.svg"
import account from "../assets/icons/account.svg"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
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
                <Box justify="space-between" align="center">

                </Box>
                <Box>

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
                                fontVariationSettings: "'FILL' 0, 'wght' 100, 'GRAD' -25, 'opsz' 48",
                                fontSize: "30px",
                                color: "white",
                                cursor: "pointer",
                                transition: "color 0.3s ease",
                                '&:hover': {
                                    color: "black",
                                },
                            }}
                        >
                            Shopping_Cart
                        </Box>

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
                                fontVariationSettings: "'FILL' 0, 'wght' 100, 'GRAD' -25, 'opsz' 48",
                                fontSize: "30px",
                                color: "white",
                                cursor: "pointer",
                                transition: "color 0.3s ease",
                                '&:hover': {
                                    color: "black",
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