import React from "react";
import Boton_primario from './Boton_primario'

export default function descripcion_Ruta({Ruta}) {
    return(
    <>

        <section
        className="relative bg-cover bg-center bg-no-repeat font-bold text-white"
        style={{ backgroundImage: `url(${Ruta.Imagen2})` }}
        >
        <div
            className="absolute inset-0 bg-white/35 sm:bg-transparent sm:from-black/75 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right ">
            <h1>Dificultad: {Ruta.Dificultad}/5 revisar como se hacen las estrellas</h1>
            <h1 className="text-3xl font-bold sm:text-5xl text-white">
               RUTA: 

                <strong className="block font-bold text-orange-600 uppercase"> {Ruta.Titulo} </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                Descripcion de la Ruta:
                {Ruta.Descripcion2}
                
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                href="#"
                className="block w-full rounded-sm bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                >
                Get Started
                </a>

                <a
                href="#"
                className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-orange-600 shadow-sm hover:text-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                >
                Learn More
                </a>
            </div>
            <h2 className="mt-20">Actividades extras :</h2>
            </div>
        </div>
        </section>
    </>
    )
}