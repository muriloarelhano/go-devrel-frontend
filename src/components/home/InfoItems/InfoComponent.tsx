import {  Flex, } from '@chakra-ui/react'
import InfoItem from './InfoItem'

const InfoComponent = () => {
  return (
      <Flex alignItems='flex-start' justifyContent='center' flexDir='row'>
        <InfoItem title='Estude o modelo' subtitle='Temos como missão auxiliar profissionais de developer relations a gerenciar ambientes de desenvolvimento de software, estude com nossos modelos para aprimorar-se'></InfoItem>
          <InfoItem title='Estude o modelo' subtitle='Temos como missão auxiliar profissionais de developer relations a gerenciar ambientes de desenvolvimento de software, estude com nossos modelos para aprimorar-se'></InfoItem>
          <InfoItem title='Estude o modelo' subtitle='Temos como missão auxiliar profissionais de developer relations a gerenciar ambientes de desenvolvimento de software, estude com nossos modelos para aprimorar-se'></InfoItem>
          <InfoItem title='Estude o modelo' subtitle='Temos como missão auxiliar profissionais de developer relations a gerenciar ambientes de desenvolvimento de software, estude com nossos modelos para aprimorar-se'></InfoItem>

      </Flex>
  )
}

export default InfoComponent