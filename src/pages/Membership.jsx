import { useState } from "react";
import { useNavigate } from "react-router";
import Header_NoSession from "../components/Header_NoSession";
import Footer from "../components/Footer";

export function Membership() {
  const [plan, setPlan] = useState("mensual");
  const navigation = useNavigate();


  return (
    <>
    <Header_NoSession/>
    <div className="bg-gray-800 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full items-center">
        <h1 className="text-3xl font-bold text-center mb-4">MEMBRESÍAS</h1>
        <h2 className="text-lg font-semibold mb-2">Mejora tu membresía</h2>
        <p className="text-gray-600 mb-4">Obtienes un 30% de descuento al comprar el plan anual</p>
        
        <div className="mb-4">
          <label className="block text-gray-700">Usuario</label>
          <input 
            type="text" 
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
            -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
            placeholder="Ingrese su nombre y apellido" 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Número de tarjeta</label>
          <input 
            type="text" 
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 
            -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" 
            placeholder="0000 0000 0000 0000" 
          />
        </div>
        
        <div className="flex gap-2 mb-4">
          <input type="text" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="MM / DD" />
          <input type="text" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="CVV" />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">País</label>
          <select className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            <option>Venezuela</option>
            <option>Colombia</option>
            <option>Argentina</option>
          </select>
        </div>
        
        <div className="mb-4 ">
          <label className="block text-gray-700">Código Postal</label>
          <input type="text" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
        
        <h2 className="text-lg font-semibold mb-2">Tipo de Membresía:</h2>
        <div className="flex flex-col gap-2 mb-4">
          <label className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onClick={() => setPlan("mensual")}>  
            <input type="radio" name="plan" checked={plan === "mensual"} readOnly />
            <span>  Plan Mensual - $5 / Mes</span>
          </label>
          <label className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onClick={() => setPlan("anual")}>  
            <input type="radio" name="plan" checked={plan === "anual"} readOnly />
            <span>  Plan Anual - $18.00 / 12 meses (Ahorra 30%)</span>
          </label>
        </div>
        
        <p className="text-center">
          <button onClick={()=> navigation("/")}   className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 font-bold shadow-xl rounded-xl w-65 h-8 text-amber-50 text-xl 
              transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative">
            Mejorar el Plan
          </button>
        </p>
      </div>
    </div>
    <Footer/>
  
    </>
  );
}
