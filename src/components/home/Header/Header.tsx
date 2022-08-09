import { Container, Stack, Text, Divider } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBarItems from './NavBarItems'

export interface MenuLinks {
    name?: string,
    link?: string,
    children?: Array<MenuLinks>
}

export interface MenuOptions {
    links?: Array<MenuLinks>
}

const HeaderMenu: React.FunctionComponent<MenuOptions> = () => {

    return (
        <Container id="header"
            position='absolute' maxW="full" paddingBottom={{ base: '2' }}>
            <Container maxW="container.xl">
                <Stack py="2" direction="row" as="header" justify="space-between" align="center" wrap="wrap">
                    <Link to={'/'}>
                        <Text fontSize='30' fontWeight='bold'>Go DevRel</Text>
                    </Link>
                    <NavBarItems />
                </Stack>
            </Container>
            <Divider />

        </Container>
    )
}

export default HeaderMenu