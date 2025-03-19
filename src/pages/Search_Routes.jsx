import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../credentials"; 
import Header_NoSession from '../components/Header_NoSession'
import Buscador from '../components/Buscador'
import Formato_Rutas from '../components/Formato_Rutas'
import Boton_primario from '../components/Boton_primario'
import Footer from '../components/Footer';


export default function search_routes() {
  const [productos, setProductos] = useState([]);

  const [titulo, setTitulo] = useState("Rutas");

  const categoria = useParams().categoria;

  useEffect(() => {

    const productosRef = collection(db, "Rutas");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    getDocs(q)
      .then((resp) => {

        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
      
  }, [categoria])

  console.log(productos)

  return (
    <>
    <div className="bg-gray-800">
      <Header_NoSession/>
      <Boton_primario text="Crear Rutas" link="/Creacion_Rutas"/>
      <div className="productos text-start rounded-2xl">
              { productos.map((prod) => <Formato_Rutas Ruta={prod} key={prod.id} />) }
      </div>
        
      <Footer/>
    </div>
    </> 
  )
}