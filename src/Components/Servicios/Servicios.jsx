import * as Icon from 'react-bootstrap-icons'
import { Flex, Box, Text } from '@chakra-ui/react'

const Servicios = () =>{

    return(
        <Flex 
        as='section' 
        id="servicios"
        flexWrap='wrap'
        justifyContent='center'
        textAlign='center'
        ml='7.5vw'
        mr='7.5vw'
        mt='10em'
        mb='7em'
        >
            <Text 
            as='h2'
            fontSize='2.5em'
            width='100vw'
            fontWeight='semibold'
            >Servicios</Text>
            <Text 
            as='p'
            color='#ACA4B4'
            fontSize='1.2em'
            >Actualmente, estos son los servicios en los que trabajo en cuanto a desarrollo de software.</Text>
            <Flex 
            as='div'
            width='100%'
            justifyContent='space-between'
            flexDirection={{base:'column', md:'row'}}
            >
                <Box 
                as='div'
                flex='1'
                p='4em 0'
                m='2em'
                borderRadius='15px'
                transition='.5s background-color, .5s box-shadow, .5s color'
                _hover={{
                    backgroundColor: '#5d17bf',
                    boxShadow: '0 0 .5em black',
                    color: '#fcfcfc'
                }} 
                >
                    <Box 
                    display='flex'
                    justifyContent='center'
                    ><Icon.FiletypePy width='2.5em' height='2.5em'/></Box>
                    <Text 
                    as='h3'
                    m='1.5em 0 0'
                    fontSize='1.5em'

                    >Programas Python</Text>
                    <Text 
                    as='p'
                    color='#ACA4B4'
                    fontSize='1.2em'
                    >Realizo programas desarrollados con python.</Text>
                </Box>

                <Box 
                as='div'
                flex='1'
                p='4em 0'
                m='2em'
                borderRadius='15px'
                transition='.5s background-color, .5s box-shadow, .5s color'
                _hover={{
                    backgroundColor: '#5d17bf',
                    boxShadow: '0 0 .5em black',
                    color: '#fcfcfc'
                }} 
                >
                    <Box 
                    display='flex'
                    justifyContent='center'
                    ><Icon.BrowserChrome width='2.5em' height='2.5em'/></Box>
                    <Text 
                    as='h3'
                    m='1.5em 0 0'
                    fontSize='1.5em'
                    >Diseño de páginas</Text>
                    <Text 
                    as='p'
                    color='#ACA4B4'
                    fontSize='1.2em'
                    >Realizo páginas web responsive a pedido con previa reunión para acordar los detalles de la misma</Text>
                </Box>    
                
                <Box 
                as='div'
                flex='1'
                p='4em 0'
                m='2em'
                borderRadius='15px'
                transition='.5s background-color, .5s box-shadow, .5s color'
                _hover={{
                    backgroundColor: '#5d17bf',
                    boxShadow: '0 0 .5em black',
                    color: '#fcfcfc'
                }} 
                >
                    <Box
                    display='flex'
                    justifyContent='center'
                    ><Icon.Cpu width='2.5em' height='2.5em'/></Box>
                    <Text 
                    as='h3'
                    m='1.5em 0 0'
                    fontSize='1.5em'
                    >Programas con Arduino</Text>
                    <Text 
                    as='p'
                    color='#ACA4B4'
                    fontSize='1.2em'
                    >Realizo programas para microcontroladores a través de arduino o mikroC, utilizando el lenguaje C++.</Text>
                </Box> 
            </Flex>    
        </Flex>
    )
}

export default Servicios