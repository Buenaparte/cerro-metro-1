import React, { use } from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { doc, getDoc,collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../credentials"; 
import Header_NoSession from '../components/Header_NoSession'
import Comentarios from '../components/Comentarios'
import Descripcion_nota from '../components/Descripcion_nota'
import Creacion_Comentarios from '../components/Creacion_Comentarios'
import { UserContext } from "../components/User_Context";
import Footer from "../components/Footer";

export default function informacion_Notas() {

    const [item, setItem] = useState(null);
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const id = useParams().id;
    const profileContext = use(UserContext)
    const {logged,profile} = profileContext


    useEffect(() => {

      const docRef = doc(db, "Notas", id);
      getDoc(docRef)
        .then((resp) => {
          setItem(
            { ...resp.data(), id: resp.id }
          );
        })

    }, [id])
    
 useEffect(() => {

    const productosRef = collection(db, "Comentarios");   
    const q = query(productosRef, where("Numeral", "==", id )) ;

    getDocs(q)
      .then((resp) => {

        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
      
  }, [categoria])

    return(
    <>
      <div className="Container ">
        <Header_NoSession/>
        <div>
        {item && <Descripcion_nota Ruta={item} />}
        </div>
        <div className=" p-4 sm:p-6">
         <a className="block text-xs text-gray-500"> Comentarios </a>
        
        <div/>
            { productos.map((prod) => <Comentarios Ruta={prod} key={prod.id} />) }
        </div><br></br>
         <div className="flex flex-col items-center">
                 <Creacion_Comentarios id={id}/>
          </div>

        <Footer/>
          
      </div>
    </>
    )
}

