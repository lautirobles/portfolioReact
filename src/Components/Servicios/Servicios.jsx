import * as Icon from 'react-bootstrap-icons'

const Servicios = () =>{


    return(
        <section id="servicios" className="servicios">
            <h2>Servicios</h2>
            <p>Actualmente, estos son los servicios en los que trabajo en cuanto a desarrollo de software.</p>
            <div className="cajas-servicios">
                <div className="serv">
                    <Icon.FiletypePy width='2.5em' height='2.5em'/>
                    <h3>Programas Python</h3>
                    <p>Realizo programas desarrollados con python.</p>
                </div>    
                <div className="serv">
                    <Icon.BrowserChrome width='2.5em' height='2.5em'/>
                    <h3>Diseño de páginas</h3>
                    <p>Realizo páginas web responsive a pedido con previa reunión para acordar los detalles de la misma </p>
                </div>
                <div className="serv">
                    <Icon.Cpu width='2.5em' height='2.5em'/>
                    <h3>Programas con Arduino</h3>
                    <p>Realizo programas para microcontroladores a través de arduino o mikroC, utilizando el lenguaje C++.</p>
                </div>
            </div>    
        </section>
    )
}

export default Servicios