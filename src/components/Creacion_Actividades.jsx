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


  const comprar = () => {
   const pedido = {
    Titulo: Titulo,
    Descripcion: Descripcion,
    Guia: Guia,
    Tiempo: Tiempo,
    Tiempo: Tipo,
    "Id-Ruta": id
}

const pedidosRef = collection(db, "Actividades");

addDoc(pedidosRef, pedido)

alert("Creacion exitosa, por favor recarge la pagina")

}

  return (
      <main >
        <div>
          <h1 >Creacion de Rutas</h1><br></br>
          <p >Introduzca los datos solicitados en su respectiva posicion</p><br></br>
          <form onSubmit={handleSubmit(comprar)}>
        <label>
          <p> Titulo de la Actividad </p>
        <input type='text' value={Titulo} onChange={(e)=>setTitulo(e.target.value)}/>
        </label> <br></br>
        <br></br>
        <label>
        <p> Descripcion de la ruta </p>
        <input type='text' value={Descripcion} onChange={(e)=>setDescripcion(e.target.value)}></input>
        </label><br></br>
        <br></br>
        <label>
        <p> Guia de la Actividad  </p>
        <input type='text' value={Guia}  onChange={(e)=>setGuia(e.target.value)}></input>
        </label>        <br></br>
        <br></br>
        <label>
        <p> Tiempo de la actividad (en minutos)</p>
        <input type="number" min="0" value={Tiempo} onChange={(e)=>setTiempo(e.target.value)} ></input>
        </label><br></br>
        <br></br>
        <label>
        <p> Tipo de la actividad </p>
        <input type='text' value={Tipo} onChange={(e)=>setTipo(e.target.value)} ></input>
        </label><br></br>
        <br></br>
        <button type="submit">Crear nueva Actividad en esta ruta</button><br></br> 
        </form>
        </div>
      </main>
  )
}