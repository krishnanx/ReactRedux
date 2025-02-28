import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import AuthForm from "../Components/AuthForm"
import { SignUpNewUser } from '../Functions/SupaAuth'
import { useDispatch, useSelector } from 'react-redux'
import { signUpUser } from '../Store/AuthSlice'
import statusCode from '../Utils/StatusCode'
import Loader from '../Components/Loader'
const SignUp = () => {

    const dispatch = useDispatch()
    const { data: products, status } = useSelector((state) => state.auth);
    const handleSignUp = async (email, password) => {
        dispatch(signUpUser({ email, password }));
    }

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
                    <AuthForm handleSignUp={handleSignUp} />
                </Box>
            </Box>
        </Box>
    )
}

export default SignUp