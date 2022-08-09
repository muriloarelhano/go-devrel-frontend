import {  Flex, } from '@chakra-ui/react'
import InfoItem from './InfoItem'

import {FaBookReader,FaUserFriends, FaUserCheck} from  'react-icons/fa';

const InfoComponent = () => {
  return (
      <Flex alignItems='flex-start' justifyContent='center' flexDir='row'>
        <InfoItem icon={<FaBookReader size={28} /> } backgroundColor='#4B59F7' title='Estude o modelo' subtitle='Temos como missão auxiliar profissionais de developer relations a gerenciar ambientes de desenvolvimento de software, estude com nossos modelos para aprimorar-se'></InfoItem>
          <InfoItem icon={<FaUserCheck  size={28}/>} backgroundColor='#805AD5' title='Envie feedbacks' subtitle='Use nossa ferramenta para enviar feedbacks sobre o modelo para que possamos analisar e aprimorar o modelo para ajudar outros e fique por dentro das mudanças'></InfoItem>
          <InfoItem icon={<FaUserFriends size={28}/>} backgroundColor='#2D3748' title='Ajude a comunidade' subtitle='Enviando suas contribuições você ajuda a comunidade a crescer e desenvolver-se, contribuia para gerar conhecimento para todos'></InfoItem>

      </Flex>
  )
}

export default InfoComponent