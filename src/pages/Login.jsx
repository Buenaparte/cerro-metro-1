import React, { useState } from 'react'
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../credentials';
import { Link, useNavigate } from 'react-router';
import { Logo_responsive } from '../components/Logo_responsive';

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
      navigation('/home')

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
  return (
    <div className='bg-gray-800 w-full h-screen flex justify-center items-center'>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 bg-amber-50 rounded-2xl w-xl h-svw justify-center items-center shadow-2xl " >
            <Logo_responsive className="!relative !w-[201.72px] !h-[80px]" />
            <h1 className="mt-10 text-center text-4xl font-bold tracking-tight text-gray-900">Inicio de Sesión</h1>
            {error && <div className="text-red-500">{error}</div>} {loading && <div className="">Cargando...</div>}
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
            <Link className="text-blue-500 font-bold " to="/register">Si aún no tienes usuario registrate</Link>
        </form>
    </div>
  )
}
