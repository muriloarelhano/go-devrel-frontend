import { Button, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
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

            <Link to='/model'>Modelo</Link>

            <Link to='/my-stage'>Meu Estágio</Link>

            <Link to='/forms'>Formulários</Link>

            <Link to='/wiki'>Wiki</Link>

            <Button variant="solid"  colorScheme='purple'>Entrar</Button>

        </Stack >

    )
}

export default NavBarItems