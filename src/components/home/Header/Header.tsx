import { Container, Stack, Text, Divider, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBarItems from './NavBarItems'
import { CgMenu } from 'react-icons/cg'
export interface MenuLinks {
    name?: string,
    link?: string,
    children?: Array<MenuLinks>
}

export interface MenuOptions {
    links?: Array<MenuLinks>
}

const HeaderMenu: React.FunctionComponent<MenuOptions> = () => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    const toggle = () => window.innerWidth < 996 ? setMenuIsOpen(!menuIsOpen) : ''
    const resetIsOpen = () => window.innerWidth > 996 ? setMenuIsOpen(false) : ''

    useEffect(() => {
        window.addEventListener('resize', resetIsOpen)
        return () => window.removeEventListener("resize", resetIsOpen)
    }, [])

    return (
        <Container id="header"
        bg={menuIsOpen ? 'white' : ''}
            position={menuIsOpen ? "absolute" : 'relative'} maxW="full" paddingBottom={{ base: '2' }} borderBottomRadius={menuIsOpen ? '3xl' : 'none'}
            shadow={menuIsOpen ? "lg" : 'none'} zIndex="99" transition="all 0.5s">
            <Container maxW="container.xl">
                <Stack py="2" direction="row" as="header" justify="space-between" align="center" wrap="wrap">
                    <Box display={{ lg: 'none' }} onClick={toggle} cursor='pointer'>
                        <CgMenu fontSize="25" />
                    </Box>
                    <Link to={'/'}>
                        <Text fontSize='30' fontWeight='bold'>Go DevRel</Text>
                    </Link>
                    <NavBarItems toggle={toggle} menuIsOpen={menuIsOpen || false}/>
                </Stack>
            </Container>

        </Container>
    )
}

export default HeaderMenu