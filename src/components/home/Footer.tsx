import { Container, Stack, Text, Divider, Box } from '@chakra-ui/react'
import githubIcon from '../../assets/icons/github.svg'

const Footer = () => {
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Container
            position='absolute' maxW="full" paddingBottom={{ base: '2' }}>
            <Divider />
            <Container maxW="container.xl">
                <Stack py="2" direction="row" justify="space-between" align="center" wrap="wrap">
                    <Text fontSize='30' fontWeight='bold'>Go DevRel</Text>
                    <Text fontSize='16'>Direitos reservados GoDevRel 2022©</Text>
                    <Box cursor='pointer'>
                        <img width='36' height='36' src={githubIcon} alt='' onClick={() => openInNewTab('https://github.com/muriloarelhano/go-devrel-frontend')} />
                    </Box>

                </Stack>
            </Container>
        </Container>
    )
}

export default Footer