import React, { use } from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { doc, getDoc,collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../credentials"; 
import Header_NoSession from '../components/Header_NoSession'
import Actividades from '../components/Actividades'
import Descripcion_Ruta from '../components/Descripcion_Ruta'
import Creacion_Actividades from '../components/Creacion_Actividades'
import { UserContext } from "../components/User_Context";
import Footer from "../components/Footer";

export default function informacion_rutas() {

    const [item, setItem] = useState(null);
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const id = useParams().id;
    const profileContext = use(UserContext)
    const {logged,profile} = profileContext


    useEffect(() => {

      const docRef = doc(db, "Rutas", id);
      getDoc(docRef)
        .then((resp) => {
          setItem(
            { ...resp.data(), id: resp.id }
          );
        })

    }, [id])
    
 useEffect(() => {

    const productosRef = collection(db, "Actividades");   
    const q = query(productosRef, where("Id-Ruta", "==", id )) ;

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
        {item && <Descripcion_Ruta Ruta={item} />}
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent text-7xl font-bold text-center mt-15 mb-15">ACTIVIDADES EXTRAS</div>
        <div>
            { productos.map((prod) => <Actividades Ruta={prod} key={prod.id} />) }
        </div><br></br>
        {logged && (
                    <>
                        <div className="flex flex-col items-center">
                            <Creacion_Actividades id={id}/>
                        </div>
                    </>
        )}
        <Footer/>
          
      </div>
    </>
    )
}

