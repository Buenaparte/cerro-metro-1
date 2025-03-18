import React from "react";
import { Link } from 'react-router-dom'


export default function Formato_Rutas({Ruta}) {
    return(
        <>
        <div className= "flex items-center">
        <img src = {Ruta.Imagen} alt='avila' className='h-48 w-96 object-contain'/>
        <div className='text-center' >
        <h1 >{Ruta.Titulo}</h1> <br></br>
        <p> {Ruta.Descripcion}</p>
        </div>
        </div>
        <div className='text-right' >
        <Link className="Saber-mas" to={`/item/${Ruta.id}`}>Saber-mas</Link>
        </div>
        </>
    )
}