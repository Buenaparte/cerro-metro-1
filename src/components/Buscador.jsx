import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../credentials";
import { useForm } from 'react-hook-form';


export default function buscador() {

const [productos, setProductos] = useState([]);
const [titulo, setTitulo] = useState("Rutas");
const [Buscar, setBuscar] = useState('')
const { register, handleSubmit } = useForm();

  const categoria = useParams().categoria;
  const comprar = () => {
  useEffect(() => {

    const productosRef = collection(db, "Rutas");
    const q = query(productosRef, where("Titulo", "==", Buscar)) 

    getDocs(q)
      .then((resp) => {

        setProductos(
          resp.docs.map((doc) => {
            const data = doc.data();
            return { ...doc.data(), id: doc.id ,
              Imagen: data.Imagen || no_image
            }
          })
        )
      })
      
  }, [categoria])
 }


    return(
    <div className='text-center'>
     <form onSubmit={handleSubmit(comprar)}>
    <input type="text" onChange={(e)=>setBuscar(e.target.value)} value={Buscar} placeholder="Search" ></input>
    <button type="submit" >Buscar</button><br></br>
    </form>
    <div className="productos text-start rounded-2xl">
                  { productos.map((prod) => <Formato_Rutas Ruta={prod} key={prod.id} />) }
          </div>
    </div>
    )
}