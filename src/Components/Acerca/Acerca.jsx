import * as Icon from 'react-bootstrap-icons'

const Acerca = () =>{


    return(
        <section id="acerca" className="acerca">
            <div className="cont-acerca">
                <h2>Sobre Mi</h2>
                <p className="subtitulo">A continuación te contaré una breve descripción acerca de mi.</p>
                <div className="descripcion">
                    <img src="../../../public/foto-hero.png" alt="" />
                    <div className="texto">
                        <p>Mi nombre es Lautaro Robles, tengo 20 años y soy de Córdoba, Argentina.<br/> 
                        Soy Técnico Electrónico, actualmente estudio Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional, lugar donde estoy realizando también una diplomatura en desarrollo de software 
                        full-stack.<br/>
                        Si te interesa mi perfil y lo que puedo ofrecer te invito a que me contactes al final de esta página o en mis redes. Para mi será un placer poder ayudar en lo que necesites. <br/>
                        Te dejo mi CV para descargar por si gustas.<br/>Muchas gracias por tu  atención y espero que nos comuniquemos pronto!
                        </p>
                        
                        <a href=""><Icon.Download/> Descargar CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Acerca