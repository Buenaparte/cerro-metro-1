import React from 'react'
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../credentials"; 
import { useForm } from 'react-hook-form';
import { uploadImage } from '../../supabseCredentials';
import { getAuth } from 'firebase/auth'
import Boton_primario from '../components/Boton_primario'
import Header_NoSession from '../components/Header_NoSession'
import Footer from '../components/Footer';
import Boton_secundario from '../components/Boton_secundario';
import { useNavigate } from 'react-router';

export default function Creacion_rutas() {

  const navigation = useNavigate()

  const [Titulo, setTitulo] = useState('')
  const [Descripcion, setDescripcion] = useState('')
  const [Descripcion2, setDescripcion2] = useState('')
  const [Dificultad, setDificultad] = useState('')
  const [Imagen, setImagen] = useState('')
  const [Imagen2, setImagen2] = useState('')
 const { register, handleSubmit } = useForm();
 const [isUploading, setIsUploading] = useState(false);

 const handleFileChange = async (e) => {
 const file = e.target.files[0];
        if (!file) return;

        try {

            setIsUploading(true);
            const imageUrl = await uploadImage(file, 'foto-perfil');
            setImagen(imageUrl)
          } catch (error) {
            alert('Error al subir la imagen');

        } finally {
            setIsUploading(false);
        }
      }

      const handleFileChange2 = async (e) => {
        const file = e.target.files[0];
               if (!file) return;
       
               try {
       
                   setIsUploading(true);
                   const imageUrl = await uploadImage(file, 'foto-perfil');
                   setImagen2(imageUrl)
                 } catch (error) {
                   alert('Error al subir la imagen');
       
               } finally {
                   setIsUploading(false);
               }
             }    

  const comprar = () => {
    var id =  Math.floor(Math.random()*1456156)
   console.log(Imagen)
   console.log(Imagen2)
   const pedido = {
    Titulo: Titulo,
    Descripcion: Descripcion,
    Descripcion2: Descripcion2,
    Dificultad: Dificultad,
    Imagen: Imagen,
    Imagen2: Imagen2,
    Numeral: id
}

const pedidosRef = collection(db, "Rutas");

addDoc(pedidosRef, pedido)
navigation('/search_routes')
alert("Creacion exitosa, por favor recarge la pagina")

}

  return (
      <div className="bg-gray-900">
            <Header_NoSession/>
        <div className="mx-auto mt-10 mb-10 flex flex-col bg-white rounded-2xl w-xl h-auto justify-center items-center shadow-black shadow-2xl">
          <h1 className="mt-5 font-bold text-orange-600 text-3xl">Creacion de Rutas</h1><br></br>
          <p className="text-sm">Introduzca los datos solicitados en su respectiva posicion</p><br></br>
          <form onSubmit={handleSubmit(comprar)}>
              
              <div className="relative">
                  <input onChange={(e)=>setTitulo(e.target.value)} type="text" value={Titulo} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Titulo Ruta</label>
              </div>
              <br></br>
              <div className="relative">
                <input type='text'value={Descripcion} onChange={(e)=>setDescripcion(e.target.value)}  id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "></input>
                <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Descripcion Ruta</label>
              
              </div >
              <br></br>
              <div className="relative">
                <p> Imagen de la ruta </p>
                <input type='file' accept='image/*'  onChange={handleFileChange} disabled={isUploading}  ></input>
                </div >        <br></br>
              <br></br>
              <div className="relative">
                <input type='text'value={Descripcion2} onChange={(e)=>setDescripcion2(e.target.value)}  id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "></input>
                <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Descripcion detallada de la ruta</label>
              
              </div >
              <br></br>
              <div className="relative">
                <input  type="number" min="0" max={5} value={Dificultad} onChange={(e)=>setDificultad(e.target.value)} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "></input>
                <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Dificultad de la ruta</label>
              
              </div>
              <br></br>
              <div className="relative">
                <p> Imagen de la pagina principal </p>
                <input type='file' accept='image/*'  onChange={handleFileChange2} disabled={isUploading} ></input>
              </div><br></br>
              <br></br>
              <div className="text-center">
                <button className="bg-gradient-to-r from-lime-400 to-lime-600 hover:bg-orange-700 active:bg-orange-900 font-semibold rounded-xl w-35 h-12 text-amber-50 
                  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative"
                  type="submit">Crear nueva ruta
                </button><br></br> 
              </div>
          </form>
          <br></br>
            <div className="mb-5">
              <Boton_secundario text="Volver" link="/search_routes"/>
            </div>
        </div>
        <Footer/>
      </div>
  )
}