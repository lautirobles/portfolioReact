import * as Icon from 'react-bootstrap-icons'
import { Flex, Box, Image, Text, Link } from '@chakra-ui/react'

const Footer = () =>{

    return(
        <Flex as='footer' w='100%'
        justifyContent='center'
        alignItems='center'
        flexDirection={{base:'column', md:'row'}}
        bgColor={'#5d17bf'}
        color='#ACA4B4'
        >
            <Box as='div' flex='2' m='3em'>
                <Image src="../../../logo2.png" w='2.5em' />
                <Text as='p' m='2em 0'>Aquí te dejo nuevamente mis redes para que puedas acceder y contactarme!</Text>
                <Box as='a'
                href="https://www.instagram.com/laurobles03" 
                target="_blank"
                m='0 .5em ' p='7px'
                borderRadius='50%'  
                color='#ACA4b4'
                ><Icon.Instagram size={20}/></Box>
                <Box as='a' 
                href="https://www.github.com/lautirobles" 
                target="_blank" 
                m='0 .5em ' p='7px'
                borderRadius='50%'
                color='#ACA4b4'
                ><Icon.Github size={20}></Icon.Github></Box>
                <Box as='a' 
                href="https://www.x.com/lautarorobless" 
                target="_blank" 
                m='0 .5em ' p='7px'
                borderRadius='50%'
                color='#ACA4b4'
                ><Icon.Twitter size={20}></Icon.Twitter></Box>
            </Box>
            <Flex as='div' flex='1' m='3em'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            >
                <a href="#inicio"><Text as='h2' color='#fcfcfc' fontSize='1.5em'>Inicio</Text></a>
                <a href="#servicios"><Text as='p' mt='1em'>Servicios</Text></a>
                <a href="#acerca"><Text as='p' mt='1em'>Sobre mi</Text></a>
                <a href="#proyectos"><Text as='p' mt='1em'>Proyectos</Text></a>
                <a href="#contacto"><Text as='p' mt='1em'>Contacto</Text></a>
            </Flex>
            <Flex as='div' flex='1' m='3em'
            flexDirection='column' justifyContent='center'
            alignItems='center'>
                <Text as='h2' color='#fcfcfc' fontSize='1.5em'>Servicios</Text>
                <Text as='p' mt='1em'>Programas Python</Text>
                <Text as='p' mt='1em'>Diseño de paginas</Text>
                <Text as='p' mt='1em'>Programas con arduino</Text>
            </Flex>
            <Flex as='div' flex='1' m='3em'
            flexWrap='wrap' justifyContent='center'
            alignItems='center'         
            flexDirection={{base:'column', md:'row'}}>
                <Text as='h2' width='100%' color='#fcfcfc' fontSize='1.5em'>Info de contacto</Text>
                <Box display='flex' mt='1em' alignItems='center'>
                    <Icon.Telephone></Icon.Telephone>
                    <p>+54 111 1111111</p>
                </Box>
                <Box display='flex' mt='1em' alignItems='center'>
                    <Icon.GeoAlt></Icon.GeoAlt>
                    <p>Córdoba, Argentina</p>
                </Box> 
                <Box display='flex' mt='1em' alignItems='center'>
                    <Icon.Envelope></Icon.Envelope>
                    <p>latirobles@gmail.com</p>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Footer