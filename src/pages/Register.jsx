import React, { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {app} from "../credentials";
import { Link, useNavigate } from 'react-router-dom';
import { Logo_responsive } from '../components/Logo_responsive';
import {query,where, doc, getFirestore, setDoc, getDocs,collection } from 'firebase/firestore';

const db = getFirestore(app)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function Register() {
  const navigation = useNavigate()
  const [name, setName] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleRegister= async(e)=>{
    e.preventDefault()

    try {
      setLoading(true)
      setError('')
      const nombreRegistrado = await createUserWithEmailAndPassword(auth, email, password)

      await setDoc( doc(db, 'users', nombreRegistrado.user.uid),{
        nombre:name,
        apellido: apellido,
        telefono:telefono,
        email:email,
        uid: nombreRegistrado.user.uid,
        fechaCreacion : new Date()

      })
      setName('')
      setEmail('')
      setPassword('')
      setApellido('')
      setTelefono('')
      setLoading(false)
      navigation('/')
      
    } catch (error) {
      setLoading(false)
      console.log(error)
      if(error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
        setError('La contraseña debe tener al menos 6 caracteres')
      }

      if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
        setError('Correo electrónico ya está en uso')
      }

      if(error.message === 'Firebase: Error (auth/missing-password).'){
        setError('Debe rellenar todos los campos')
      }
      if(error.message === 'Firebase: Error (auth/invalid-email).'){
        setError('Email inválido')
      }
      console.log(error.message)
      
      
    }
    
  }

  const handleGoogleSignup = async () => {
    try {
      setLoading(true);
      setError('');

      
      const result = await signInWithPopup(auth, provider); 
      const user = result.user;

      
      const q = query(collection(db, 'users'), where('email', '==', user.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        
        setError('Este correo ya está registrado. Por favor, inicia sesión.');
        setLoading(false);
        navigation('/login'); 
        return;
      }

      
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        nombre: user.displayName || name,  
        email: user.email,
        uid: user.uid,
        fechaCreacion: new Date(),
      });

      setLoading(false);
      navigation('/'); 

    } catch (error) {
      setLoading(false);
      console.error(error); 
      setError('No se pudo registrar con Google. Inténtalo de nuevo más tarde.');
    }
  };

  return (
      <div className='bg-gray-800 w-full h-screen flex justify-center items-center'>       
          <form onSubmit={handleRegister} className="flex flex-col gap-4 bg-amber-50 rounded-2xl w-xl h-svw
          justify-center items-center shadow-2xl " >
              <Logo_responsive className="!relative !w-[201.72px] !h-[80px]" />
              <h1 className="mt-10 text-center text-4xl font-bold tracking-tight text-gray-900">Registro</h1>
              {error && <div className="text-red-500">{error}</div>} {loading && <div className="bg-rose-600 rounded-2xl"><svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>Cargando</div>}
              <label className="block text-sm/6 font-medium text-gray-900">
                  Email :  
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
                -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="email" name="email"/>
              </label>
              <label className="block text-sm/6 font-medium text-gray-900">
                  Nombre :  
                  <input value={name} onChange={(e)=>setName(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
                -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" name="name"/>
              </label>
              <label className="block text-sm/6 font-medium text-gray-900">
                  Apellido :  
                  <input value={apellido} onChange={(e)=>setApellido(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
                -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" name="apellido"/>
              </label>
              <label className="block text-sm/6 font-medium text-gray-900">
                  Telefono :  
                  <input value={telefono} onChange={(e)=>setTelefono(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
                -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="telefono" name="telefono"/>
              </label>
              <label className="block text-sm/6 font-medium text-gray-900">
                  Password :  
                  <input value={password} onChange={(e)=>setPassword(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
                -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="password" name="password"/>
              </label>
              <button type="submit" className="bg-orange-600 hover:bg-orange-950 active:bg-orange-600 font-bold shadow-xl rounded-xl w-30 h-8 text-amber-50 text-xl 
              transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                Ingresar</button>
               
   
                <button type="button" onClick={handleGoogleSignup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Registrarse con Google
                </button>

              <Link className="text-blue-500 font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100" to="/login">Si ya tienes usuario haz login</Link>
              
          </form>
      </div>
  )
}
