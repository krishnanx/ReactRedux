import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { CartCards } from '../Components/CartCard'
const Cart = () => {
    const products = useSelector(state => state.cart)
    return (
        <Box
            display='flex'
            justifyContent='center'
            flexDirection='column'
            alignItems='center'
            pt='20px'

        >

            <Box
                w='100%'

                display='flex'
                flexWrap='wrap'
                justifyContent='center'

            >
                <CartCards products={products} />
            </Box>

        </Box>
    )
}

export default Cart