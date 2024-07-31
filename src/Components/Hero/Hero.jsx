import * as Icon from 'react-bootstrap-icons'
import { Flex, Image, Text, Box } from '@chakra-ui/react'

const Hero = () =>{


    return(
        <Flex 
        as='section' 
        id="inicio"
        ml='7.5vw'
        mr='7.5vw'
        p='.5em .5em 0 .5em'
        borderRadius='20px'
        flexWrap='wrap'
        justifyContent='center'
        // flexDirection='column'
        alignItems='center'
        bg= 'linear-gradient(to bottom, rgb(93 23 191/1), rgb(93 23 191/.7)),url("../../../public/texto-fondo2.png")'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        >
            <Text 
            as='h1'
            textAlign='center'
            fontSize='3.5em'
            fontWeight='bold'
            color='#fcfcfc'
            margin='.5em 0'
            >Hola, soy <Text as='span' color='#f2b807'>Lautaro Robles</Text></Text>
            <Flex 
            as='div'
            width='100%'
            height='4vw'
            justifyContent='center'
            alignItems='center'
            >
                <Box 
                as='a' 
                href="https://www.instagram.com/laurobles03" 
                target="_blank"
                m='0 .5em'
                p='10px'
                borderRadius='50%'
                backgroundColor='#7a35c4'
                color='#ACA4B4'
                border='1px solid #7a35c4'
                transition='.5s border'
                _hover={{
                    border: '1px solid black'
                }}
                ><Icon.Instagram/></Box>
                <Box 
                as='a' 
                href="https://www.github.com/lautirobles" 
                target="_blank"
                m='0 .5em'
                p='10px'
                borderRadius='50%'
                backgroundColor='#7a35c4'
                color='#ACA4B4'
                border='1px solid #7a35c4'
                transition='.5s border'
                _hover={{
                    border: '1px solid black'
                }}
                ><Icon.Github/></Box>
                <Box 
                as='a' 
                href="https://www.x.com/lautarorobless" 
                target="_blank"
                m='0 .5em'
                p='10px'
                borderRadius='50%'
                backgroundColor='#7a35c4'
                color='#ACA4B4'
                border='1px solid #7a35c4'
                transition='.5s border'
                _hover={{
                    border: '1px solid black'
                }}
                ><Icon.Twitter/></Box>
            </Flex>
            <Image 
            src="../../../foto-hero.png"
            m='1em 0 0 0'
            filter='drop-shadow(0 0 .75rem #fcfcfc)'
            />      
        </Flex>
    )
}

export default Hero