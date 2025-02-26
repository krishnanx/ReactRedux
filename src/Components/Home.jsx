import { Box, Button, Heading, Image, Text, Card, CardHeader, CardBody, CardFooter, Stack, Divider, ButtonGroup } from '@chakra-ui/react'
import dress from "../assets/dress.jpg"
import React from 'react'
import background from "../assets/freestocks-VFrcRtEQKL8-unsplash.jpg"
import styled from 'styled-components';
import eyewear from "../assets/eyewear.jpg"
import watch from "../assets/watch.jpg"
const Dashboard = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="99.2vw" // Use 100% instead of 100vw
            h="3000px"// Adjust based on navbar height

            p="0"
            position="absolute"
            zIndex="10"
        >
            <Box
                w="100%"
                h="900px"
                position="relative"
                mb="60px"
            >
                <Image
                    src={background}
                    w="99.5vw"
                    h="100%"
                    objectFit="cover"

                >

                </Image>
                <Box
                    position="relative"
                    top={-720}
                    left={200}
                    h="300px"
                    w="700px"

                >
                    <Heading
                        fontSize="4.5rem"
                        fontWeight="bold"
                    >
                        Raining offers For
                    </Heading>
                    <Heading

                        fontSize="4.5rem"
                        fontWeight="bold"
                    >
                        Hot Summer!
                    </Heading>
                    <Text
                        fontSize="2rem"
                        fontWeight="bold"
                    >
                        25% Off On All Products
                    </Text>
                    <StyledWrapper

                    >
                        <Button className="button-name" role="button">SHOP NOW</Button>
                    </StyledWrapper>
                </Box>

            </Box>
            <Box
                w="90%"
                h="1000px"
                // bgColor="black"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="400px"
            >

                <Box
                    w="480px" h="500px"
                    ml="100px"

                >
                    <Card maxW='sm' p="0" w="480px" h="500px" bgImage={dress}
                        bgSize="cover"
                        bgPos="center"

                        _after={{
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            bg: "rgba(0, 0, 0, 0.5)", // Black overlay
                        }}
                    >
                    </Card>

                    <Box
                        position="relative" top="-200px" left="40px"
                        w="300px"

                    >
                        <Text
                            color="white"
                            fontSize="1.5rem"
                            fontWeight="bold"
                            w="300px"
                        >
                            Latest Eyewear For You
                        </Text>
                        <Text textAlign="left" whiteSpace="pre-line" fontSize="1rem" color="white">
                            Explore our premium eyewear collection
                            where clarity, style, and confidence come together.
                        </Text>

                        <ButtonGroup spacing='2' w="50%">
                            <StyledWrapper

                            >
                                <Button className="button-name" role="button">SHOP NOW</Button>
                            </StyledWrapper>

                        </ButtonGroup>
                    </Box>
                </Box>
                <Box
                    w="480px" h="500px"

                >
                    <Card maxW='sm' p="0" w="480px" h="500px" bgImage={eyewear}
                        bgSize="cover"
                        bgPos="center"

                        _after={{
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            bg: "rgba(0, 0, 0, 0.5)", // Black overlay
                        }}
                    >
                    </Card>

                    <Box
                        position="relative" top="-200px" left="40px"
                        w="300px"
                    >
                        <Text
                            color="white"
                            fontSize="1.5rem"
                            fontWeight="bold"
                            w="300px"
                        >
                            Latest Eyewear For You
                        </Text>
                        <Text textAlign="left" whiteSpace="pre-line" fontSize="1rem" color="white">
                            Explore our premium eyewear collection
                            where clarity, style, and confidence come together.
                        </Text>

                        <ButtonGroup spacing='2' w="50%">
                            <StyledWrapper

                            >
                                <Button className="button-name" role="button">SHOP NOW</Button>
                            </StyledWrapper>

                        </ButtonGroup>
                    </Box>
                </Box>
                <Box
                    w="480px" h="500px"
                >
                    <Card maxW='sm' p="0" w="480px" h="500px" bgImage={watch}
                        bgSize="cover"
                        bgPos="center"

                        _after={{
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            bg: "rgba(0, 0, 0, 0.5)", // Black overlay
                        }}
                    >
                    </Card>

                    <Box
                        position="relative" top="-200px" left="40px"
                        w="300px"
                    >
                        <Text
                            color="white"
                            fontSize="1.5rem"
                            fontWeight="bold"
                            w="300px"
                        >
                            Latest Eyewear For You
                        </Text>
                        <Text textAlign="left" whiteSpace="pre-line" fontSize="1rem" color="white">
                            Explore our premium eyewear collection
                            where clarity, style, and confidence come together.
                        </Text>

                        <ButtonGroup spacing='2' w="50%">
                            <StyledWrapper

                            >
                                <Button className="button-name" role="button">SHOP NOW</Button>
                            </StyledWrapper>

                        </ButtonGroup>
                    </Box>
                </Box>

            </Box >
            <Box
                w="100%"
                h="500px"
                borderTopWidth="0.5px"
                borderTopColor="gray"
                borderBottomWidth="0.5px"
                borderBottomColor="gray"
                display="flex"

            >
                <Box
                    w="50%"
                    display="Flex"
                    alignItems="center"
                    justifyContent="center"

                >
                    <Box
                        w="500px"
                        h="200px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Heading
                            textAlign="start"
                            w="500px"
                            fontSize="4rem"
                        >
                            Vistora
                        </Heading>
                        <Text
                            fontSize="2rem"
                            textAlign="start"
                            w="500px"
                        >
                            Because You Deserve the Best.
                        </Text>
                    </Box>
                </Box>
                <Box
                    w="50%"
                    display="flex"

                >

                </Box>

            </Box>
            <Box
                w="100%"
                h="130px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-around"
            >
                <Text
                    textAlign="center"
                    h="50px"
                    p="20px"
                >
                    Copyright © 2025 Vistora.
                </Text>
                <Box
                    w="50%"
                    h="100px"
                >
                    <></>
                </Box>
            </Box>
        </Box >
    )
}

const StyledWrapper = styled.div`
  .button-name {
    align-items: center;
    margin-Top:20px;
    appearance: none;
    background-color: #fcfcfd;
    border-radius: 4px;
    border-width: 0;
    box-sizing: border-box;
    color: #36395a;
    cursor: pointer;
    display: inline-flex;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition:
      box-shadow 0.15s,
      transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size:19px;
  }

  .button-name:focus {
    
  }

  .button-name:hover {
   
    transform: translateY(-2px);
    background-color:black;
    color:white;
  }

  .button-name:active {
   
    transform: translateY(2px);
  }`;

export default Dashboard