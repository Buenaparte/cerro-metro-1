import React from 'react'
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../credentials"; 
import { useForm } from 'react-hook-form';


export default function Creacion_Actividades({id}) {

  const [Titulo, setTitulo] = useState('')
  const [Descripcion, setDescripcion] = useState('')
  const [Guia, setGuia] = useState('')
  const [Tiempo, setTiempo] = useState('')
  const [Tipo, setTipo] = useState('')
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false)


  const comprar = () => {
   const pedido = {
    Titulo: Titulo,
    Descripcion: Descripcion,
    Guia: Guia,
    Tiempo: Tiempo,
    "Id-Ruta": id
}

  const pedidosRef = collection(db, "Actividades");

  addDoc(pedidosRef, pedido)

  setIsOpen(false)

  alert("Creacion exitosa, por favor recarge la pagina")

}

  return (
    <>
      <div>
        <button className=" bg-blue-500 hover:bg-blue-700 active:bg-blue-900 font-bold shadow-xl rounded-xl w-40 h-12 text-amber-50 
                      transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative" 
        onClick={()=>setIsOpen(true)}  >Crear Actividades</button>
      </div>
      {isOpen &&(
        <div className="fixed inset-0 bg-gray bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
          <div className="text-right object-right-top">
                  <button className="mb-10 bg-red-500 hover:bg-red-700 active:bg-orange-900 font-bold shadow-xl rounded-xl w-12 h-12 text-amber-50 items-center
                      transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative" 
                      onClick={()=>setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7 mx-auto">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                  </button><br></br> 
          </div>
          <div className="flex flex-col bg-white rounded-2xl w-xl h-auto justify-center items-center shadow-2xl " >
              <br></br>
              <h1 className="font-bold text-orange-600 text-3xl">Creacion de Actividad</h1><br></br>
              <p className="text-sm">Introduzca los datos solicitados en su respectiva posicion</p><br></br>
              <form onSubmit={handleSubmit(comprar)} className="flex flex-col gap-0.5 rounded-2xl w-xl h-auto justify-center items-center shadow-2xl ">
                <div className="relative">
                  <input onChange={(e)=>setTitulo(e.target.value)} type="text" value={Titulo} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Titulo Actividad</label>
                </div> <br></br>
                <div className="relative">
                  <input type='text' value={Descripcion} onChange={(e)=>setDescripcion(e.target.value)} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "></input>
                  <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Descripcion de la ruta</label>
                </div><br></br>
                <br></br>
                <div className="relative">
                  <input type='text' value={Guia}  onChange={(e)=>setGuia(e.target.value)} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "></input>
                  <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Guia de la Actividad</label>
                </div>
                <br></br>
                <div className="relative">
                  <input type="number" min="0" value={Tiempo} onChange={(e)=>setTiempo(e.target.value)} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " ></input>
                  <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Tiempo (en minutos)</label>
                </div><br></br>
                <br></br>
                <div className="relative">
                  <input type='text' value={Tipo} onChange={(e)=>setTipo(e.target.value)} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " ></input>
                  <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Tipo de la actividad</label>
                </div>
                <br></br>
                <div className="text-center">
                  <button className="mb-10 bg-orange-500 hover:bg-orange-700 active:bg-orange-900 font-bold shadow-xl rounded-xl w-30 h-12 text-amber-50 
                      transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative" 
                      type="submit">Crear 
                  </button><br></br> 
                </div>
            </form>
            
          </div>
        </div>
      )}
      
    </>
  )
}