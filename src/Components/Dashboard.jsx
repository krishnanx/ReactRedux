import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import background from "../assets/freestocks-VFrcRtEQKL8-unsplash.jpg"
import styled from 'styled-components';
const Dashboard = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="99.2vw" // Use 100% instead of 100vw
            h="4000px"// Adjust based on navbar height

            p="0"
            position="absolute"
            zIndex="10"
        >
            <Box
                w="100%"
                h="900px"
                position="relative"
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
        </Box>
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