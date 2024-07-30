import * as Icon from 'react-bootstrap-icons'

const Proyectos = () =>{


    return(
        <section id="proyectos" className="proyectos">
            <h2>Proyectos</h2>
            <p>En esta sección podrás encontrar los proyectos públicos que he desarrollado.</p>
            <div className="botones">
                <a href="">Todo</a>
                <a href="">Landing page</a>
                <a href="">Secciones</a>
                <a href="">Python</a>
            </div>
            <div className="proyec">
                <a className="proyec-1" href="https://www.github.com/lautirobles/portfolio-personal" target="_blank"></a>
                <a className="proyec-2" href=""></a>
                <a className="proyec-3" href=""></a>
            </div>
            <a className="most-mas" href="">Mostrar Mas <Icon.ArrowRight /></a>
        </section>
    )
}

export default Proyectos