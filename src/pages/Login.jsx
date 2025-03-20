import React, { useState } from 'react'
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../credentials';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Logo_responsive } from '../components/Logo_responsive';
import {signInWithGoogle} from "../credentials";
import { db } from "../credentials"; 
import { collection, doc, setDoc } from "firebase/firestore";

const auth = getAuth(app);
export default function Login() {
  
  const navigation = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
 

  
  
  const handleLogin = async(e)=>{
    e.preventDefault()
    try {
      setLoading(true)
      setError('')
      await signInWithEmailAndPassword(auth, email, password).then((response) => {
      })
      
      setEmail('')
      setPassword('')
      setLoading(false)
      navigation('/')

    } catch (error) {
      setLoading(false)
      console.log(error.message)
      if(error.message === 'Firebase: Error (auth/invalid-credential).'){
        setError('Credenciales inválidas')
      }
      if(error.message === 'Firebase: Error (auth/invalid-email).'){
        setError('Email inválido')
      }
      
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle(navigation);
      if (user) {
  
        
        const userRef = doc(collection(db, "users"), user.uid);
        await setDoc(userRef, {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid
        }, { merge: true });
  
        navigation('/');
      } else {
        setError("Error al iniciar sesión con Google");
      }
    } catch (error) {
      console.error("Error en login con Google:", error);
      setError("Error al iniciar sesión con Google");
    }
  };

  return (
    <div className='bg-gray-800 w-full h-screen flex justify-center items-center'>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 bg-amber-50 rounded-2xl w-xl h-svw justify-center items-center shadow-2xl " >
            <Logo_responsive className="!relative !w-[201.72px] !h-[80px]" />
            <h1 className="mt-10 text-center text-4xl font-bold tracking-tight text-gray-900">Inicio de Sesión</h1>
            {error && <div className="text-red-500">{error}</div>} 
            {loading && 
              <div role="status">
                  <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span class="sr-only">Loading...</span>
              </div>
            }
            <label className="block text-sm/6 font-medium text-gray-900">

                Email :  
                <input value={email} onChange={(e)=> setEmail(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
                -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
            
            </label>
            <label className="block text-sm/6 font-medium text-gray-900">

                Password :  
                <input value={password} onChange={(e)=> setPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
                -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                type="password" name="password"/>
            
            </label>
            <button type="submit" className="bg-orange-600 hover:bg-orange-950 active:bg-orange-600 font-bold shadow-xl rounded-xl w-30 h-8 text-amber-50 text-xl 
            transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              Ingresar</button>

              <button type="button" onClick={handleGoogleLogin} className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 font-bold shadow-xl rounded-xl w-65 h-8 text-amber-50 text-xl 
            transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
               <span>Iniciar sesión con Google</span>
             </button>
            
            <Link className="text-blue-500 font-bold " to="/register">Si aún no tienes usuario registrate</Link>
        </form>
    </div>
  )
}
