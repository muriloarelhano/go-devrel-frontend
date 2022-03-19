import { Box, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import NavBarItems from '../home/NavBarItems'
import { Divider } from '@chakra-ui/react'

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
                  <Text fontSize='30' fontWeight='bold'>Go DevRel</Text>
                  <NavBarItems />
              </Stack>

          </Container>
          <Divider/>

      </Container>
  )
}

export default HeaderMenu