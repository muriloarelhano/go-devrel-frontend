import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const InfoItem = ({ title, subtitle, backgroundColor, icon }: { title: string, subtitle: string, backgroundColor: string, icon: any }) => {
  return (
    <Box maxW='416' mr='3' >
      <Flex alignItems='flex-start' textAlign='left' py='10'>
        <Box>
          <Box backgroundColor={backgroundColor} color='white' w={12} h={12} borderRadius='5' py='2.5' px='2.5' boxShadow='0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);'>
            {icon}
          </Box>
          <Heading py='2' fontSize='18' color='#2D3748' fontWeight='bold'>{title}</Heading>
          <Text fontSize='14' color='#2D3748' fontWeight='regular'>{subtitle}</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default InfoItem