import {Box, Flex, Image, Button} from '@chakra-ui/react'
import { BorderBottom } from 'react-bootstrap-icons'

const Header = () =>{

    let elementosNav = ['Inicio', 'Servicios', 'Acerca', 'Proyectos', 'Contacto']


    const funcionHover = ()=>{
        
    }

    return(
        <Flex as='header'
        ml='7.5%'
        mr='7.5%'
        mt='1.5em'
        mb='1.5em'
        justifyContent='space-between'
        alignItems='center'
        bg='#5d17bf'
        color='#ACA4B4'
        p='.5em 1em'
        fontSize='1.2em'
        borderRadius='20px'
        >
            <Image 
            src="../../../logo2.png"
            boxSize='50px'
            />
            <Flex 
            as='nav'
            justifyContent='center'
            width='100%'
            >
                {elementosNav.map((elemento)=>(
                    <Box 
                    key={elemento}
                    as='a' 
                    href= {`#${elemento.toLowerCase()}`}
                    m='.5em 1.3em 0 1.3em'
                    pb='.5em'
                    transition='borderBottom .3s, color .3s'
                    borderBottom='2px solid #5d17bf'
                    scrollBehavior='smooth'
                    _hover={{
                        borderBottom: '2px solid #fcfcfc',
                        color: '#fcfcfc'
                    }}
                    >
                        {elemento}
                    </Box>
                ))}
            </Flex>
            <Button as='a'
            href='#contacto'
            color='#5d17bf'
            fontSize='1em'
            >
                Contratame
            </Button>
        </Flex>
    )
}

export default Header