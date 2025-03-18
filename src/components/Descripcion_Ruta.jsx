import React from "react";
import Boton_primario from './Boton_primario'

export default function descripcion_Ruta({Ruta}) {
    return(
    <>
        <img src = {Ruta.Imagen2} alt='avila 2' className='h-60 w-100 object-contain'/>
        <br></br> 
        <h1>Dificultad: {Ruta.Dificultad}/5 revisar como se hacen las estrellas</h1>  
        <br></br> 
        <h2>{Ruta.Titulo}</h2>
        <h3>Descripcion de la Ruta</h3>
        <p>{Ruta.Descripcion2}a</p>
        <br></br>
        <h2>Actividades extras</h2>
        <br></br>
    </>
    )
}