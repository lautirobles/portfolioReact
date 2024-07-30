


const Contacto = ()=>{


    return(
        <section id="contacto" className="contacto">
            <h2>Contacto</h2>
            <p>Aqui te dejo un formulario para que llenes en caso que me quieras contactar por un trabajo.</p>
            <form>
                <input type="text" placeholder="Nombre"/>
                <input type="email" placeholder="Mail"/>
                <input type="text" placeholder="Telefono"/>
                {/* <input type="text" placeholder="Servicio de interes"/> */}
                <select name="servicio" id="">
                    <option value="">Servicio de interes...</option>
                    <option value="PY">Programa Python</option>
                    <option value="PW">Pagina Web</option>
                    <option value="MC">Microcontroladores</option>
                </select>
                <input className="tiempo-entrega" type="text" placeholder="Tiempo de entrega"/>
                <textarea className="detail-project" name="" id="" placeholder="Detalles sobre el proyecto.." ></textarea>   
            </form>
            <a className="bot-enviar" href="" type="submit">Enviar</a>
        </section>
    )
}

export default Contacto