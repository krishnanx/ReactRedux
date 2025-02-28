import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import AuthForm from "../Components/AuthForm"
const SignUp = () => {
    return (
        <Box
            w="99.5vw"
            h="700px"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                w="50%"
                h="600px"
            >
                <Box
                    w="100%"
                    h="100px"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text
                        textAlign="center"
                        fontSize="2rem"

                    >
                        Create an account
                    </Text>
                </Box>
                <Box
                    w="100%"
                    h="500px"
                >
                    <AuthForm />
                </Box>
            </Box>
        </Box>
    )
}

export default SignUp