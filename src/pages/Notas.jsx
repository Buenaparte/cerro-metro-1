import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../credentials"; 
import Header_NoSession from '../components/Header_NoSession'
import Formato_Notas from '../components/Formato_Notas'
import Boton_primario from '../components/Boton_primario'
import Footer from '../components/Footer';
import no_image from "../assets/no_image.png"


export default function search_routes() {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Notas");
  const categoria = useParams().categoria;

  useEffect(() => {

    const productosRef = collection(db, "Notas");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

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

  console.log(productos)

  return (
    <>
    <div className="bg-gray-800 w-screen">
      <Header_NoSession/>
      <div>
        Notas informativass</div>
      <div >
        <Boton_primario  text="Crear Notas" link="/Crear_Notas"/>
      </div>
      <div className="productos text-start rounded-2xl">
              { productos.map((prod) => <Formato_Notas Ruta={prod} key={prod.id} />) }
      </div>
        
      <Footer/>
    </div>
    </> 
  )
}