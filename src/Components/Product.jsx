import React, { useEffect, useState } from 'react'
import { Heading, Box, Image, Card, CardHeader, CardBody, CardFooter, Text, Stack, Divider, ButtonGroup, Button } from '@chakra-ui/react'

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => setProducts(result))
    }, [])
    const Cards = ({ products }) => {
        console.log(products)
        return (
            products.map((data, index) => (
                <Box
                    m='30px'
                    key={index}
                >
                    <Card maxW='sm' h="100%" >
                        <CardBody display='flex' flex='1' flexDirection='column'>
                            <Box
                                w='100%'
                                h='300px'
                                display='flex'
                                justifyContent='center'
                                alignItems='center'

                            >
                                <Image
                                    src={data.image}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    w='200px'
                                    h="200px"
                                />
                            </Box>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{data.title}</Heading>
                                <Text>
                                    {data.description}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    ${data.price}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Box>
            ))
        )
    }
    return (
        <Box
            display='flex'
            justifyContent='center'
            flexDirection='column'
            alignItems='center'
            pt='20px'

        >
            <Heading
                fontSize='3rem'
            >
                Product Dashboard
            </Heading>

            <Box
                w='100%'

                display='flex'
                flexWrap='wrap'
                justifyContent='center'

            >
                <Cards products={products} />
            </Box>

        </Box>

    )
}

export default Product