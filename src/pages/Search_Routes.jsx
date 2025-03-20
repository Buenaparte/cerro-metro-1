import React, { use } from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../credentials"; 
import Header_NoSession from '../components/Header_NoSession'
import Formato_Rutas from '../components/Formato_Rutas'
import Boton_primario from '../components/Boton_primario'
import Footer from '../components/Footer';
import no_image from "../assets/no_image.png"
import { UserContext } from '../components/User_Context';


export default function search_routes() {
  const profileContext = use(UserContext)
  const {logged,profile} = profileContext
  const [productos, setProductos] = useState([]);
  const [isGuia, setIsGuia] = useState(false)

  const [titulo, setTitulo] = useState("Rutas");

  const categoria = useParams().categoria;

  

  useEffect(() => {

    const productosRef = collection(db, "Rutas");
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
      <div className="bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent text-7xl font-bold text-center mt-15 mb-15">
        RUTAS DISPONIBLES</div>
        
      {profile.tipoUsuario === "Guia" &&(
        <div className=" mt-10  text-center">
        <Boton_primario  text="Crear Rutas" link="/Creacion_Rutas"/>
        </div>
    )}
      
      <div className="productos text-start rounded-2xl">
              { productos.map((prod) => <Formato_Rutas Ruta={prod} key={prod.id} />) }
      </div>
        
      <Footer/>
    </div>
    </> 
  )
}