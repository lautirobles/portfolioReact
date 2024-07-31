import * as Icon from 'react-bootstrap-icons'
import { Flex, Box, Text, Image, Button, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'


const Acerca = () =>{


    let habilidades = ['PYTHON', 'HTML', 'CSS', 'JAVASCRIPT', 'LINUX']
    let porcentajes = ['80', '80', '70', '60', '50']
    let i=0

    return(
        <Flex 
        as='section' 
        id="acerca"
        ml='7.5vw'
        mr='7.5vw'
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
        backgroundColor='#5d17bf'
        border='1px solid black'
        borderRadius='20px'
        >
            <Flex 
            as='div'
            justifyContent='center'
            alignItems='center'
            flexWrap='wrap'
            backgroundColor='#fcfcfc'
            m='1.5em'
            borderRadius='15px'

            >
                <Text 
                as='h2'
                width='100%'
                textAlign='center'
                fontSize='2.5em'
                m='1em 0 0'
                fontWeight='semibold'
                >Sobre Mi</Text>
                <Text 
                as='p'
                width='100%'
                textAlign='center'
                color='#ACA4B4'
                fontSize='1.2em'
                fontWeight='semibold'

                >A continuación te contaré una breve descripción acerca de mi.</Text>
                <Flex 
                as='div'
                alignItems='center'
                justifyContent='space-between'
                >
                    <Image 
                    src="../../../foto-hero.png"
                    m='0 1em'
                    display={{base:'none', xl:'inline-block'}}
                    />
                    <Flex 
                    as='div'
                    alignItems='center'
                    flexWrap='wrap'
                    m='2em 2em 0'
                    p='2em'
                    >
                        <Text
                        as='p'
                        width='100%'
                        fontSize={{base:'12px', md:'18px'}}
                        color='#ACA4B4'
                        >Mi nombre es Lautaro Robles, tengo 20 años y soy de Córdoba, Argentina.<br/> 
                        Soy Técnico Electrónico, actualmente estudio Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional, lugar donde estoy realizando también una diplomatura en desarrollo de software 
                        full-stack.<br/>
                        Si te interesa mi perfil y lo que puedo ofrecer te invito a que me contactes al final de esta página o en mis redes. Para mi será un placer poder ayudar en lo que necesites. <br/>
                        Te dejo mi CV para descargar por si gustas.<br/>Muchas gracias por tu  atención y espero que nos comuniquemos pronto!
                        </Text>
                        
                        <Button as='a'
                        href="../../../My Student CV.pdf" download
                        bgColor='#5d17bf'
                        color='#fcfcfc'
                        p='20px 20px'
                        mt='1em'
                        transition='.5s border'
                        border='1px solid white'
                        _hover={{
                            border: '1px solid black'
                        }}
                        ><Icon.Download/> Descargar CV</Button>
                    </Flex>
                </Flex>
            </Flex>
            
            <Flex 
            as='div'
            width='100%'
            justifyContent='space-around'
            p='1em'
            > 
                {habilidades.map((habilidad, i)=>(
                    <Flex as='div'
                    display={{base:'none', xl:'flex'}}
                    key={habilidad}
                    flex='1'
                    flexWrap='wrap'
                    justifyContent='center'
                    alignItems='center'
                    bgColor='#fcfcfc'
                    p='1vw 0'
                    m='1em'
                    borderRadius='15px'
                    >
                        <CircularProgress value={porcentajes[i]} 
                        color='#5d17bf' 
                        size='2.5em' 
                        thickness='12px'
                        m='.5em'>
                            <CircularProgressLabel 
                            fontSize='20px'
                            fontWeight='bold'
                            color= '#ACA4B4'
                            >{porcentajes[i]}%</CircularProgressLabel>
                        </CircularProgress>
                        <Text as='h2'
                        fontWeight='bold'
                        width='100%'
                        textAlign='center'
                        fontSize='1.2em'
                        color='gray'
                        >{habilidad}</Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}

export default Acerca