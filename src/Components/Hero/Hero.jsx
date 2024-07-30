import * as Icon from 'react-bootstrap-icons'


const Hero = () =>{


    return(
        <section id="inicio" className="hero">
            <h1>Hola, soy <span>Lautaro Robles</span></h1>
            <div className="redes">
                <a href="https://www.instagram.com/laurobles03" target="_blank"><Icon.Instagram/></a>
                <a href="https://www.github.com/lautirobles" target="_blank"><Icon.Github/></a>
                <a href="https://www.x.com/lautarorobless" target="_blank"><Icon.Twitter/></a>
            </div>
            <img src="../../../public/foto-hero.png" alt="" />
            
        </section>
    )
}

export default Hero