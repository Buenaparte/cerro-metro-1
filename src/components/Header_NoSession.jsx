import { Logo_responsive } from "./Logo_responsive.jsx";
import React, {use, useContext} from 'react';
import Boton_primario from "./Boton_primario.jsx";
import Boton_secundario from "./Boton_secundario.jsx";
import { Link, Navigate, useNavigate } from "react-router";
import { UserContext } from "./User_Context.jsx";
import { app } from "../credentials.js";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app)

export default function Header_NoSession() {
  const navigation = useNavigate()
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
  console.log("Usuario logueado")
  console.log(logged, profile)
  const principal_colors = "text-orange-600 hover:text-orange-950 active:text-orange-600"
  return (
    <div className="bg-linear-to-r bg-gray-200 w-screen top-0 left-0 shadow-md z-50 font-bold">
      <div className="flex flex-col w-full items-center justify-center px-20 py-2">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center justify-end gap-4 flex-1">
              <div className="flex w-full items-center gap-4 pl-10 pr-0 py-0 rounded-lg">
                <Logo_responsive className="!relative !w-[201.72px] !h-[43.62px]" />
                <Link to="/" className={principal_colors}>
                  Principal
                </Link>
                <div className="w-0.5 h-7 bg-orange-950 rounded" />
                  
                  <Link to="/membership" className={principal_colors}>
                    Membresías
                  </Link>
                <div className="w-0.5 h-7 bg-orange-950 rounded" />
                <Link to="/search_routes" className={principal_colors}>
                  Agenda
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
                    <button className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 items-center">
                        <svg className="bg-center w-10 h-10 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </button>
                    <button onClick={handleLogout} className="items-center ">
                      
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-orange-950 text-6xl hover:text-orange-600 active:bg-orange-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                        <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
                      </svg>
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
