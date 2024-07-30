


const Contacto = ()=>{


    return(
        <section id="contacto" class="contacto">
            <h2>Contacto</h2>
            <p>Aqui te dejo un formulario para que llenes en caso que me quieras contactar por un trabajo.</p>
            <form>
                <input type="text" placeholder="Nombre"/>
                <input type="email" placeholder="Mail"/>
                <input type="text" placeholder="Telefono"/>
                <input type="text" placeholder="Servicio de interes"/>
                <input class="tiempo-entrega" type="text" placeholder="Tiempo de entrega"/>
                <textarea class="detail-project" name="" id="" placeholder="Detalles sobre el proyecto.." ></textarea>   
            </form>
            <a class="bot-enviar" href="" type="submit">Enviar</a>
        </section>
    )
}

export default Contacto