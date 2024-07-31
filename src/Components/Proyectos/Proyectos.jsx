import * as Icon from 'react-bootstrap-icons'
import { Flex, Text, Box, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { CopyToClipboard} from 'react-copy-to-clipboard'

const Proyectos = () =>{

    let [flag1, setFlag1] = useState(false)
    let [flag2, setFlag2] = useState(false)
    let [flag3, setFlag3] = useState(false)

    const caracteristicas = ['Todo', 'Landing Page', 'Seccion', 'Python']


    const filtroCaract = (caract)=>{
        if(caract=='Landing Page'){
            console.log('hola')
        }
        
    }

    return(
        <Flex as='section' 
        id="proyectos"
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
        ml='7.5vw'
        mr='7.5vw'
        mt='10em'
        mb='10em'
        p='.5em'
        >
            <Text as='h2'
            width='100%'
            fontSize='2.5em'
            textAlign='center'
            fontWeight='semibold'
            >Proyectos</Text>
            <Text as='p'
            width='100%'
            textAlign='center'
            color='#ACA4B4'
            fontWeight='semibold'>En esta sección podrás encontrar los proyectos públicos que he desarrollado.</Text>
            <Flex as='div'
            width='100%'
            textAlign='center'
            justifyContent='center'
            >
                {/* BOTONES QUE FILTRAN POR CARACTERISTICAS LOS PROYECTOS */}
                {/* {caracteristicas.map((caract)=>(
                    <Button
                    key={caract} as='a' 
                    p='.5em'
                    m='1em'
                    bgColor='#f2f2f2'
                    color='#ACA4B4'
                    transition='.5s background-color, .5s color'
                    cursor='pointer'
                    _hover={{
                        color: '#fcfcfc',
                        bgColor: '#5d17bf'
                    }}
                    >{caract}</Button>
                ))} */}
                
            </Flex>
            <Flex as='div'
            width='100%'
            justifyContent='space-between'
            >
                <Box 
                m='10px'
                borderRadius='10px'
                flex='1'
                height='20em'
                backgroundImage= 'url("../../../../../proyec-1.png")'
                backgroundRepeat='no-repeat'
                backgroundPosition='center'
                backgroundSize='cover'
                _hover={{
                    backgroundImage: 'linear-gradient(rgb(93 23 191/.5), rgb(93 23 191/.5)) , url("../../../../../proyec-1.png")'

                }}
                onMouseEnter={()=>(setFlag1(true))}
                onMouseLeave={()=>(setFlag1(false))}
                >{flag1 && 
                    <Flex
                    justifyContent='center'
                    alignItems='center'
                    height='100%'
                    >
                        <Box as='a'
                        p='10px'
                        m='.5em'
                        bgColor='#7a35c4'
                        color='#fcfcfc'
                        borderRadius='50%'
                        border='1px solid #7a35c4'
                        transition='.3s border'
                        cursor='pointer'
                        _hover={{
                            border: '1px solid #5d17bf'
                        }}
                        ><CopyToClipboard text={'https://www.github.com/lautirobles/portfolio-personal'}><Icon.Copy/></CopyToClipboard></Box>
                        <Box as='a'
                        target='_BLANK'
                        href='https://www.github.com/lautirobles/portfolio-personal'
                        p='10px'
                        m='.5em'
                        bgColor='#7a35c4'
                        color='#fcfcfc'
                        borderRadius='50%'
                        border='1px solid #7a35c4'
                        transition='.3s border'
                        _hover={{
                            border: '1px solid #5d17bf'
                        }}
                        ><Icon.BoxArrowUpRight/></Box>
                        </Flex>
                    }</Box>
                
                <Box 
                m='10px'
                borderRadius='10px'
                flex='1'
                height='20em'
                backgroundImage= 'url("../../../../../proyec-2.png")'
                backgroundRepeat='no-repeat'
                backgroundPosition='center'
                backgroundSize='cover'
                _hover={{
                    backgroundImage: 'linear-gradient(rgb(93 23 191/.5), rgb(93 23 191/.5)) , url("../../../../../proyec-2.png")'

                }}
                onMouseEnter={()=>(setFlag2(true))}
                onMouseLeave={()=>(setFlag2(false))}
                >{flag2 && 
                    <Flex
                    justifyContent='center'
                    alignItems='center'
                    height='100%'
                    >
                        <Box as='a'
                        p='10px'
                        m='.5em'
                        bgColor='#7a35c4'
                        color='#fcfcfc'
                        borderRadius='50%'
                        border='1px solid #7a35c4'
                        transition='.3s border'
                        cursor='pointer'
                        _hover={{
                            border: '1px solid #5d17bf'
                        }}
                        ><CopyToClipboard text={'https://github.com/lautirobles/image-based-web-project-1'}><Icon.Copy/></CopyToClipboard></Box>
                        <Box as='a'
                        href='https://github.com/lautirobles/image-based-web-project-1'
                        target='_BLANK'
                        p='10px'
                        m='.5em'
                        bgColor='#7a35c4'
                        color='#fcfcfc'
                        borderRadius='50%'
                        border='1px solid #7a35c4'
                        transition='.3s border'
                        _hover={{
                            border: '1px solid #5d17bf'
                        }}
                        ><Icon.BoxArrowUpRight/></Box>
                        </Flex>
                    }</Box>
                
                <Box 
                m='10px'
                borderRadius='10px'
                flex='1'
                height='20em'
                backgroundImage= 'url("../../../../../proyec-3.png")'
                backgroundRepeat='no-repeat'
                backgroundPosition='center'
                backgroundSize='cover'
                _hover={{
                    backgroundImage: 'linear-gradient(rgb(93 23 191/.5), rgb(93 23 191/.5)) , url("../../../../../proyec-3.png")'

                }}
                onMouseEnter={()=>(setFlag3(true))}
                onMouseLeave={()=>(setFlag3(false))}
                >{flag3 && 
                    <Flex
                    justifyContent='center'
                    alignItems='center'
                    height='100%'
                    >
                        <Box as='a'
                        p='10px'
                        m='.5em'
                        bgColor='#7a35c4'
                        color='#fcfcfc'
                        borderRadius='50%'
                        border='1px solid #7a35c4'
                        transition='.3s border'
                        cursor='pointer'
                        _hover={{
                            border: '1px solid #5d17bf'
                        }}
                        ><CopyToClipboard text={'https://github.com/lautirobles/image-based-web-project-2'}><Icon.Copy/></CopyToClipboard></Box>
                        <Box as='a'
                        href='https://github.com/lautirobles/image-based-web-project-2'
                        target='_BLANK'
                        p='10px'
                        m='.5em'
                        bgColor='#7a35c4'
                        color='#fcfcfc'
                        borderRadius='50%'
                        border='1px solid #7a35c4'
                        transition='.3s border'
                        _hover={{
                            border: '1px solid #5d17bf'
                        }}
                        ><Icon.BoxArrowUpRight/></Box>
                        </Flex>
                    }</Box>
            </Flex>
            {/* <Button as='a'
            p='.5em 1em'
            m='1em'
            bgColor='#f2f2f2'
            color='#ACA4B4'
            transition='.3s background-color, .3s color'
            _hover={{
                color: '#fcfcfc',
                bgColor: '#5d17bf'
            }}
            >Mostrar Mas <Icon.ArrowRight /></Button> */}
        </Flex>
    )
}

export default Proyectos