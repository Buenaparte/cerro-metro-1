import React from "react";
import Boton_primario from './Boton_primario'

export default function Actividades({Ruta}) {
    return(
    <>
     <div>
        <h1>{Ruta.Titulo}</h1> <br></br>
        <h2>Guia: {Ruta.Guia}</h2> <br></br>
        <h3>Tiempo: {Ruta.Tiempo} minutos</h3> <br></br> 
        <p>{Ruta.Descripcion}</p>
        </div>
     <div className='text-right' >
         <Boton_primario text="Reservar" link="/"/>
     </div>
     <br></br> 
    </>
    )
}