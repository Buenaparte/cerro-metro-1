import React from "react";
import Boton_primario from './Boton_primario'

export default function descripcion_Ruta({Ruta}) {
    console.log(Ruta)
    return(
    <>

        <section
        className="relative bg-cover bg-center bg-no-repeat font-bold text-white"
        style={{ backgroundImage: `url(${Ruta.Imagen})` }}
        >
        <div
            className="absolute inset-0 bg-white/35 sm:bg-transparent sm:from-black/75 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right ">
            <h1>Dificultad: {Ruta.Dificultad}/5 revisar como se hacen las estrellas</h1>
            <h1 className="text-xl font-bold sm:text-5xl text-white">
               RUTA: 

                <strong className="block font-bold text-orange-600 uppercase text-7xl"> {Ruta.Titulo} </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-sm/relaxed">
                Descripcion de la Ruta:
                {Ruta.Descripcion2}
                
            </p>
            <h2 className="mt-10">Actividades extras :</h2>
            </div>
        </div>
        </section>
    </>
    )
}