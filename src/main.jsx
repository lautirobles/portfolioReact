import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Servicios from './Components/Servicios/Servicios'
import Acerca from './Components/Acerca/Acerca'
import Proyectos from './Components/Proyectos/Proyectos'
import Contacto from './Components/Contacto/Contacto'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Hero/>
    <Servicios/>
    <Acerca/>
    <Proyectos/>
    <Contacto/>
  </React.StrictMode>,
)
