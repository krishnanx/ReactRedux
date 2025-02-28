import {
    Box, Text, Link, Button, Image, Heading, textDecoration, Circle,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,

} from "@chakra-ui/react"

import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import cart from "../assets/icons/shopping.svg"
import account from "../assets/icons/account.svg"
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import SignUp from "../Pages/SignUp"
const Navbar = () => {
    const navigate = useNavigate();
    const { onOpen, onClose, isOpen } = useDisclosure()
    const cartProducts = useSelector(state => state.cart)
    const location = useLocation();
    useEffect(() => {

        console.log(location)
    }, [location])
    const handleACC = () => {
        onOpen()
    }
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
                            color={location.pathname === "/Products" ? "blue" : "black"}
                            _hover={{ textDecoration: 'none', color: location.pathname === "/Products" ? "blue" : "white" }}
                        >
                            EVERYTHING
                        </Link>
                        <Link
                            to="/Products"
                            // onClick={() => navigate("/Men")}
                            fontSize="1.2rem"
                            color={location.pathname === "/Men" ? "blue" : "black"}
                            _hover={{ textDecoration: 'none', color: location.pathname === "/Men" ? "blue" : "white" }}
                        >
                            MEN
                        </Link>
                        <Link
                            to="/Products"
                            // onClick={() => navigate("/Women")}
                            fontSize="1.2rem"
                            color={location.pathname === "/Women" ? "blue" : "black"}
                            _hover={{ textDecoration: 'none', color: location.pathname === "/Women" ? "blue" : "white" }}
                        >
                            WOMEN
                        </Link>
                        <Link
                            to="/Products"
                            // onClick={() => navigate("/Accessories")}
                            fontSize="1.2rem"
                            color={location.pathname === "/Accessories" ? "blue" : "black"}
                            _hover={{ textDecoration: 'none', color: location.pathname === "/Accessories" ? "blue" : "white" }}
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
                    <Modal isOpen={isOpen} onClose={onClose}
                        isCentered
                        size="lg"


                    >
                        <ModalOverlay />
                        <ModalContent
                            h="400px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        // bgColor="#c8c7b3"
                        >
                            <ModalHeader
                                display="flex"
                                justifyContent="center"
                                fontSize="2rem"
                            >WELCOME BACK!</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="space-around"

                            >
                                <Box>
                                    <Text
                                        fontSize="1.5rem"
                                        textAlign="center"
                                    >
                                        Sign in or create an account for faster checkout, exclusive deals, and order tracking
                                    </Text>
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                >
                                    <Button colorScheme='teal' variant='outline' mb="2"
                                        borderRadius="20px"
                                        w="350px"
                                        onClick={() => {
                                            onClose()
                                            navigate("/SignUp")
                                        }}
                                    >
                                        Log in
                                    </Button>
                                    <Button colorScheme='teal' variant='outline'
                                        borderRadius="20px"
                                        w="350px"
                                    >
                                        Sign up
                                    </Button>
                                </Box>
                            </ModalBody>

                            <ModalFooter>
                                {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='ghost'>Secondary Action</Button> */}
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                    <Button
                        bgColor="transparent"
                        h="50px"
                        w="30px"
                        onClick={() => handleACC()}
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
const signinButton = styled.div`
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 16px 36px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: ;
    border-radius: 100px;
    font-weight: 600;
    color: #1f387e;
    box-shadow: 0 0 0 2px #ffffff;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button svg {
    position: absolute;
    width: 24px;
    fill: #1f387e;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    right: 16px;
  }

  .animated-button .arr-2 {
    left: -25%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #c5e5e4;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 16px;
  }

  .animated-button:hover .text {
    transform: translateX(12px);
  }

  .animated-button:hover svg {
    fill: #1f387e;
  }

  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px greenyellow;
  }

  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }`;
export default Navbar