import { Box, Card, CardBody, Stack, Heading, Divider, Image, CardFooter, ButtonGroup, Button, Text } from '@chakra-ui/react'
export const CartCards = ({ products, HandleDelete }) => {
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
                        <ButtonGroup spacing='2' display="flex" alignItems="center" justifyContent="space-between" w="100%">
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button
                                onClick={() => HandleDelete(data.id)}
                            >
                                <Box
                                    as="span"
                                    className="material-symbols-outlined"
                                    sx={{
                                        fontVariationSettings: "'FILL' 0, 'wght' 100, 'GRAD' 0, 'opsz' 48",
                                        fontSize: "30px",
                                        color: "black",
                                        cursor: "pointer",
                                        transition: "color 0.3s ease",
                                        '&:hover': {
                                            color: "white",
                                        },
                                    }}
                                >
                                    delete
                                </Box>
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Box >
        ))
    )
}