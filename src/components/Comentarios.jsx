import React, { use } from "react";
import Boton_primario from './Boton_primario'

export default function Comentarios({Ruta}) {
    
    return(
        <>
        <div className="mx-auto  bg-gradient-to-r from-violet-200 to-pink-200 mt-8 rounded-2xl container w-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow  position:relative">
            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                <h1 className="ml-4 mt-0.5 text-4xl text-orange-600 font-bold">{Ruta.Titulo}</h1>
                <div className=" p-4 sm:p-6 text-left">
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        Comentario: 
                        {" " + Ruta.Descripcion}
                    </p>
                </div>
            </article>
        </div>
    </>
    )
}