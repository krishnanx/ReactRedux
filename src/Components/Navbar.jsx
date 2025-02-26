import { Box, Text, Link, Button } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Box
                as="nav"
                position="fixed"  // Keeps Navbar always on top

                width="100%"
                bg="rgba(0, 0, 0, 0.1)"  // Semi-transparent background
                h="90px"
                w="99.2vw"
                zIndex="1000"  // Ensures it's above the image
            >
                <Box justify="space-between" align="center">
                    <Link to="/">
                        <Button colorScheme="whiteAlpha">Dashboard</Button>
                    </Link>
                    <Link to="/cart">
                        <Button colorScheme="whiteAlpha">Cart</Button>
                    </Link>
                </Box>
            </Box>
            {/* Push content down to prevent it from going under Navbar */}
            <Box >
                <Outlet />
            </Box>
        </>

    )
}

export default Navbar