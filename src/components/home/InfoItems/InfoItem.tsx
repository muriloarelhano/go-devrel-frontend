import { Box, Flex, Heading,  Text } from '@chakra-ui/react'
import InfoIcon from '../../../assets/icons/infoIcon.svg'

const InfoItem = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return (
    <Box maxW='316' mr='3' p='0'>
      <Flex alignItems='flex-start' textAlign='left' py='10'>
        <Box>
          <Box backgroundColor='#4B59F7' w={12} h={12} borderRadius='5' p='3' my='3'boxShadow='0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);'>
            <img width='26' height='26'  src={InfoIcon} alt='' />
          </Box>
          <Heading py='2' fontSize='18' color='#2D3748' fontWeight='bold'>{title}</Heading>
          <Text fontSize='14' color='#2D3748' fontWeight='regular'>{subtitle}</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default InfoItem