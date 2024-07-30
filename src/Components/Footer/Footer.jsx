

const Footer = () =>{

    return(
        <footer>
            <div className="cont-logo">
                <img className="logo" src="../../../public/logo2.png" alt="Logo"/>
                <p>Aquí te dejo nuevamente mis redes para que puedas acceder y contactarme!</p>
                <a href="https://www.instagram.com/laurobles03" target="_blank"><i href="../../../public/Iconos/instagram.svg"></i></a>
                <a href="https://www.github.com/lautirobles" target="_blank"><i className="bi bi-github"></i></a>
                <a href="https://www.x.com/lautarorobless" target="_blank"><i className="bi bi-twitter"></i></a>
            </div>
            <div className="cont-enlaces">
                <a href="#inicio"><h2>Inicio</h2></a>
                <a href="#servicios"><p>Servicios</p></a>
                <a href="#acerca"><p>Sobre mi</p></a>
                <a href="#proyectos"><p>Proyectos</p></a>
                <a href="#contacto"><p>Contacto</p></a>
            </div>
            <div className="cont-serv">
                <h2>Servicios</h2>
                <p>Programas Python</p>
                <p>Diseño de paginas</p>
                <p>Programas con arduino</p>
            </div>
            <div className="cont-contacto">
                <h2>Info de contacto</h2>
                <div className="numero">
                    <i className="bi bi-telephone"></i>
                    <p>+54 111 1111111</p>
                </div>
                <div className="ubi">
                    <i className="bi bi-geo-alt"></i>
                    <p>Córdoba, Argentina</p>
                </div>
                <div className="mail">
                    <i className="bi bi-envelope"></i>
                    <p>latirobles@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}