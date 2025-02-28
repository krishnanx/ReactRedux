import { Box, Text, useToast, Wrap, WrapItem, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import AuthForm from "../Components/AuthForm"
import { SignUpNewUser } from '../Functions/SupaAuth'
import { useDispatch, useSelector } from 'react-redux'
import { signUpUser } from '../Store/AuthSlice'
import statusCode from '../Utils/StatusCode'
import Loader from '../Components/Loader'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const dispatch = useDispatch()
    const toast = useToast()
    const navigate = useNavigate()
    const { data: data, status } = useSelector((state) => state.auth);
    const handleSignUp = async (email, password) => {
        console.log(email, password);
        dispatch(signUpUser({ email, password }));
    }
    if (status === statusCode.LOADING) {
        return (
            <Box
                display="flex"
                w="99vw"
                h="1000px"
                justifyContent="center"
                alignItems="center"
            >
                <Loader />
            </Box>
        )
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