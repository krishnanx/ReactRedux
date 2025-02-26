import React, { useEffect, useState } from 'react'
import { Heading, Box, Image, Card, CardHeader, CardBody, CardFooter, Text, Stack, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { add } from '../Store/CartSlice'
import { Cards } from '../Components/Card'
const Product = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => setProducts(result))
    }, [])
    const HandleCart = (product) => {
        dispatch(add(product))
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
                <Cards products={products} handleCart={HandleCart} />
            </Box>

        </Box>

    )

}
export default Product