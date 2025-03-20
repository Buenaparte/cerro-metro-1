import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/User_Context";  
import Boton_primario from './Boton_primario';

export default function Actividades({ Ruta }) {
  const profileContext = useContext(UserContext);
  
  
  const logged = profileContext ? profileContext.logged : false; 
  const navigate = useNavigate();

  const handleReservar = () => {
    if (!logged) {
      alert("¡Debes iniciar sesión para reservar!");
    } else {
      navigate("/booking");
    }
  };

  return (
    <>
      <div className="mx-auto bg-gradient-to-r from-violet-200 to-pink-200 mt-8 rounded-2xl container mx-auto w-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow position:relative">
        <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
          <div className="p-4 sm:p-6">
            <a className="block text-xs text-gray-500">Actividad</a>
            <h1 className="mt-0.5 text-5xl font-bold uppercase bg-gradient-to-tr from-blue-600 to-blue-900 bg-clip-text text-transparent">
              {Ruta.Titulo}
            </h1>
            <h1 className="mt-0.5 text-4xl text-orange-600 font-bold">Guía: {Ruta.Guia}</h1>
            <h1 className="mt-0.5 text-xl text-gray-600 font-bold">Tiempo: {Ruta.Tiempo} minutos</h1>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Descripción: {Ruta.Descripcion}
export default function Actividades({Ruta}) {
    return(
    <>
        <div className="mx-auto  bg-gradient-to-r from-violet-200 to-pink-200 mt-8 rounded-2xl container mx-auto w-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow  position:relative">
            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
        
            <div className=" p-4 sm:p-6">
            <a className="block text-xs text-gray-500"> Actividad </a>
        
            <a href="#">
                <h1 className="mt-0.5 text-5xl  font-bold uppercase bg-gradient-to-tr from-blue-600 to-blue-900 bg-clip-text text-transparent">{Ruta.Titulo}</h1>
            </a>

            <a href="#">
                <h1 className="mt-0.5 text-4xl text-orange-600 font-bold">Guía: {" "+Ruta.Guia}</h1>
            </a>

            <a href="#">
                <h1 className="mt-0.5 text-xl text-gray-600 font-semibold">Tiempo: {" "+Ruta.Tiempo} minutos</h1>
            </a>
        
            <p className="mt-1 line-clamp-3 text-sm/relaxed text-gray-500">
            Descripción: 
            {" "+Ruta.Descripcion}
            </p>
          </div>
          <div className="text-right mb-5 mr-5">
            <button 
              onClick={handleReservar} 
              className="p-3 bg-blue-500 text-white rounded-lg"
            >
              Reservar
            </button>
          </div>
        </article>
      </div>
    </>
  );
}
