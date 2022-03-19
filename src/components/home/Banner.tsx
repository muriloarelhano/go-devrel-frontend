import React from 'react'
import { Box, Container, Flex, Heading, Stack, } from '@chakra-ui/react'
import BannerImage from '../../assets/images/banner.svg'

const Banner = () => {
    return (
        <Container maxW="container.xl" py="24" px="10">
            <Stack alignItems="center" justifyItems="center" justifyContent="space-between">
                <Flex alignItems='center' textAlign='center' flex="0 0 50%" py="30px">
                    <Box>
                        <Heading  fontSize='50'  color='black' fontWeight="bold">Um novo conceito de </Heading>
                        <Heading  fontSize='50' color="#805AD5"  fontWeight="bold">gerenciamento para equipes <br></br>de software</Heading>
                    </Box>
                </Flex>
                <Box flex="0 0 45%" pt={{ base: "20", lg: '0' }}>
                    <img src={BannerImage} />
                </Box>
            </Stack>
        </Container>

    )
}

export default Banner