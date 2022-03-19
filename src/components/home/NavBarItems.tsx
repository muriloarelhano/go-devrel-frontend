import { Button, Stack, Link } from '@chakra-ui/react'
import React from 'react'


const NavBarItems: React.FunctionComponent = () => {


    return (
        <Stack
            display={{  lg: 'flex' }}
            paddingY='15px'
            direction={{ base: "column", md: 'row' }}
            flexBasis={{ base: "100%", lg: "40%" }}
            alignItems={{ base: "flex-start", md: 'center' }}
            justify="space-between"
            spacing={{ base: 14, md: 0 }}
            wrap="wrap"
            fontWeight="semibold"
            fontSize='16'>

            <Link variant="menu">Modelo</Link>

            <Link variant="menu">Meu Estágio</Link>

            <Link variant="menu">Formulários</Link>

            <Link variant="menu">Wiki</Link>

            <Button variant="solid"  colorScheme='purple'>Entrar</Button>

        </Stack >

    )
}

export default NavBarItems