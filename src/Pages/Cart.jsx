import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartCards } from '../Components/CartCard'
import { remove } from '../Store/CartSlice'
const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart)
    const HandleDelete = (product) => {
        dispatch(remove(product))
    }
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
                <CartCards products={products} HandleDelete={HandleDelete} />
            </Box>

        </Box>
    )
}

export default Cart