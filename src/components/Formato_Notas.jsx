import React from "react";
import { Link, useNavigate } from 'react-router-dom'


export default function Formato_Notas({Ruta}) {
    const navigation = useNavigate()
    const navegar = () => {
     navigation(`/Nota/${Ruta.id}`)
    }
    return(
        <>
        <div className=" bg-white mt-8 rounded-2xl container mx-auto w-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow position:relative">
            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
            <img
            alt="Article Image"
            src={Ruta.Imagen}
            className="h-56 w-full object-cover"
            />
        
            <div className=" p-4 sm:p-6">
            <a className="block text-xs text-gray-500"> Informacion </a>
        
            <a href="#">
                <h1 className="mt-0.5 text-4xl text-orange-600 font-bold">{Ruta.Titulo}</h1>
            </a>
        
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {Ruta.Descripcion}
            </p>
            </div>
            <div className='text-right' >
                <button className="Saber-mas mb-3 mr-3 bg-orange-500 hover:bg-orange-700 active:bg-orange-900 font-bold shadow-xl rounded-xl w-20 h-10 text-amber-50 
                    transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative" 
                    onClick={navegar}>Ver Más
                </button>
            </div>
        </article>
        </div>
      </>
    )
}