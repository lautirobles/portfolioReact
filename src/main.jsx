import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'

import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Servicios from './Components/Servicios/Servicios'
import Acerca from './Components/Acerca/Acerca'
import Proyectos from './Components/Proyectos/Proyectos'
import Contacto from './Components/Contacto/Contacto'
import Footer from './Components/Footer/Footer'



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ChakraProvider>
      <Header/>
      <Hero/>
      <Servicios/>
      <Acerca/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
    </ChakraProvider>
  </React.StrictMode>,
)
