import React from 'react'
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../credentials"; 
import { useForm } from 'react-hook-form';
import { uploadImage } from '../../supabseCredentials';
import { getAuth } from 'firebase/auth'
import Boton_primario from '../components/Boton_primario'
import Header_NoSession from '../components/Header_NoSession'

export default function Creacion_rutas() {

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
    id: id
}

const pedidosRef = collection(db, "Rutas");

addDoc(pedidosRef, pedido)

}

  return (
      <main >
            <Header_NoSession/>
        <div>
          <h1 >Creacion de Rutas</h1><br></br>
          <p >Introduzca los datos solicitados en su respectiva posicion</p><br></br>
          <form onSubmit={handleSubmit(comprar)}>
        <label>
          <p> Titulo de la Ruta </p>
        <input type='text' value={Titulo} onChange={(e)=>setTitulo(e.target.value)}/>
        </label>
        <br></br>
        <label>
        <p> Resumen de la ruta </p>
        <input type='text'></input>
        </label>
        <br></br>
        <label>
        <p> Imagen del resumen  </p>
        <input type='file' accept='image/*'  onChange={handleFileChange} disabled={isUploading} ></input>
        </label>        <br></br>
        <br></br>
        <label>
        <p> Descripcion detallada de la ruta </p>
        <input type='text' ></input>
        </label>
        <br></br>
        <label>
        <p> Dificultad de la ruta </p>
        <input type='text' ></input>
        </label>
        <br></br>
        <label>
        <p> Imagen de la pagina principal </p>
        <input type='file' accept='image/*'  onChange={handleFileChange2} disabled={isUploading}></input>
        </label><br></br>
        <br></br>
        <button type="submit">Crear nueva ruta</button><br></br> 
        </form>
        <br></br>
          <div>
            <Boton_primario text="Volver a Home" link="/"/>
          </div>
        </div>
      </main>
  )
}