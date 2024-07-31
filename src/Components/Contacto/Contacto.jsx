import { Formik } from 'formik'
import * as Yup from 'yup'
import { Flex, Input, Text, Select, Textarea, Button, Box, Alert, AlertIcon} from '@chakra-ui/react'


const Contacto = ()=>{


    return(
        <Formik
        initialValues={{
            nombre: '',
            email: '',
            telefono:'',
            servicio:'',
            tiempo:'',
            detalles:''

        }}
        
        validationSchema={Yup.object({
            nombre:Yup
            .string()
            .required('Este dato es requerido')
            .max(16, 'Debe ingresar menos de 16 caracteres'),
            email:Yup
            .string()
            .required('Este dato es requerido')
            .email('Ingrese un email valido'),
            telefono:Yup
            .string()
            .required('Este dato es requerido'),
            servicio:Yup
            .string()
            .required('Este dato es requerido'),
            tiempo:Yup
            .string()
            .required('Este dato es requerido'),
            detalles:Yup
            .string()
            .required('Este dato es requerido')
        })}

        onSubmit ={(values)=>{
            console.log(values)
        }}
        >

        {({
            values,
            errors,
            handleChange,
            handleSubmit
        })=>(
            <Flex 
            as='section' 
            id="contacto"
            flexWrap='wrap'
            justifyContent='center'
            alignItems='center'
            ml='7.5vw'
            mr='7.5vw'
            mb='10em'
            >
                <Text 
                as='h2'
                width='100%'
                textAlign='center'
                fontSize='2.5em'
                >Contacto</Text>
                <Text 
                as='p'
                color='#ACA4B4'
                fontWeight='semibold'
                mb='2em'
                >Aqui te dejo un formulario para que llenes en caso que me quieras contactar por un trabajo.</Text>
                <Flex as='form'
                justifyContent='space-around'
                flexWrap='wrap'
                width='100%'
                onSubmit={handleSubmit}
                >
                    <Flex as='div'
                    width='100%'
                    justifyContent='space-around'>
                        <Input 
                        type="text" 
                        placeholder="Nombre"
                        width='40%'
                        color='gray'
                        id='nombre'
                        name='nombre'
                        value={values.nombre}
                        onChange={handleChange}
                        />
                        <Input 
                        type="email" 
                        width='40%'
                        placeholder="Mail"
                        color='gray'
                        id='email'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        />
                    </Flex>
                    <Flex as='div'
                    width='100%'
                    height='4em'>
                    <Box
                    m='.5em 5% 1em'
                    width='40%'
                    >{errors.nombre? <Alert status='error' borderRadius='5px'><AlertIcon/>{errors.nombre}</Alert> : null}</Box>
                    <Box
                    m='.5em 5% 1em'
                    width='40%'
                    >{errors.email? <Alert status='error' borderRadius='5px'><AlertIcon/>{errors.email}</Alert> : null}</Box>
                    </Flex>

                    <Input 
                    type="text" 
                    width='40%'
                    placeholder="Telefono"
                    color='gray'
                    id='telefono'
                    name='telefono'
                    value={values.telefono}
                    onChange={handleChange}
                    />
                    <Select
                    width='40%' 
                    name="servicio" 
                    id='servicio'
                    placeholder='Seleccione una opcion...'
                    color='gray'
                    value={values.servicio}
                    onChange={handleChange}
                    >
                        <option value="PY">Programa Python</option>
                        <option value="PW">Pagina Web</option>
                        <option value="MC">Microcontroladores</option>
                    </Select>
                    <Flex as='div'
                    width='100%'
                    height='4em'>
                    <Box
                    m='.5em 5% 1em'
                    width='40%'
                    >{errors.telefono? <Alert status='error' borderRadius='5px'><AlertIcon/>{errors.telefono}</Alert> : null}</Box>
                    <Box
                    m='.5em 5% 1em'
                    width='40%'
                    >{errors.servicio? <Alert status='error' borderRadius='5px'><AlertIcon/>{errors.servicio}</Alert> : null}</Box>
                    </Flex>
                    <Input 
                    type="text" 
                    id='tiempo'
                    name='tiempo'
                    placeholder="Tiempo de entrega"
                    width='40%'
                    color='gray'
                    value={values.tiempo}
                    onChange={handleChange}
                    />
                    <Textarea 
                    placeholder="Detalles sobre el proyecto.." 
                    width='40%'
                    id='detalles'
                    name='detalles'
                    color='gray'
                    resize='none'
                    value={values.detalles}
                    onChange={handleChange}
                    ></Textarea>   
                    {/* ERRORES TIEMPO Y DETALLES */}
                    <Flex as='div'
                    width='100%'
                    height='4em'>
                    <Box
                    m='.5em 5% 1em'
                    width='40%'
                    >{errors.tiempo? <Alert status='error' borderRadius='5px'><AlertIcon/>{errors.tiempo}</Alert> : null}</Box>
                    <Box
                    m='.5em 5% 1em'
                    width='40%'
                    >{errors.detalles? <Alert status='error' borderRadius='5px'><AlertIcon/>{errors.detalles}</Alert> : null}</Box>
                    </Flex>
                    {/* BOTON */}
                    <Box
                    width='90%'
                    >
                        <Button
                        type="submit"
                        float='right'
                        color='#fcfcfc'
                        bgColor='#5d17bf'
                        border='1px solid #5d17bf'
                        _hover={{
                            border: '1px solid black'
                        }}
                        >Enviar</Button>
                    </Box>
                </Flex>
            </Flex>
            )}
        </Formik>
    )
}

export default Contacto