import { Logo_responsive } from "./Logo_responsive.jsx";
import React, {use} from 'react';
import Boton_primario from "./Boton_primario.jsx";
import Boton_secundario from "./Boton_secundario.jsx";
import { Link } from "react-router";
import { UserContext } from "./User_Context.jsx";
import { app } from "../credentials.js";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app)

export default function Header_NoSession() {
  const profileContext = use(UserContext)
  const {logged,profile, setLogged} = profileContext

  const handleLogout= async () => {
      try {
        await signOut(auth)
        setLogged(false)


      } catch (error) {
        console.log(error.message)
        
      }
      
  }

  console.log(logged, profile)
  const principal_colors = "text-orange-600 hover:text-orange-950 active:text-orange-600"
  return (
    <div className="w-full bg-gray-300 fixed top-0 left-0 shadow-md z-50 font-bold">
      <div className="flex flex-col w-full items-center justify-center px-20 py-2">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center justify-end gap-4 flex-1">
              <div className="flex w-full items-center gap-4 pl-10 pr-0 py-0 rounded-lg">
                <Logo_responsive className="!relative !w-[201.72px] !h-[43.62px]" />
                <Link to="/home" className={principal_colors}>
                  Principal
                </Link>
                <div className="w-0.5 h-7 bg-orange-950 rounded" />
                  {logged && (
                    <>
                      <Link to="/profile" className={principal_colors}>
                        Perfil
                      </Link>
                      <div className="w-0.5 h-7 bg-orange-950 rounded" />
                    </>
                  )}
                  <Link to="/reviews" className={principal_colors}>
                    Reseñas
                  </Link>
                <div className="w-0.5 h-7 bg-orange-950 rounded" />
                <Link to="/blogs" className={principal_colors}>
                  Blogs
                </Link>
              </div>
              <div className="flex gap-6">
                {!logged?(
                  <>
                    <Boton_primario  text='Iniciar Sesión' link = "/login"/> 
                    <Boton_secundario link = "/register" text='Registrarse'/>
                  </>

                ):(

                  <>
                    <span>{profile.email}</span>
                    <span>{profile.name}</span>
                    <button onClick={handleLogout} className="items-center bg-orange-600 hover:bg-orange-950 active:bg-orange-600 font-bold shadow-xl rounded-xl w-40 h-12 text-amber-50 text-xl 
                    transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                    Cerrar Sesión 
                    </button>
                  
                  </>)}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
