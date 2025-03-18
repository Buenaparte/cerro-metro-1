import { useState } from "react";

export function Membership() {
  const [plan, setPlan] = useState("mensual");

  return (
    <div className="bg-orange-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-4">MEMBRESÍAS</h1>
        <h2 className="text-lg font-semibold mb-2">Mejora tu membresía</h2>
        <p className="text-gray-600 mb-4">Obtienes un 30% de descuento al comprar el plan anual</p>
        
        <div className="mb-4">
          <label className="block text-gray-700">Usuario</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded-lg" 
            placeholder="Ingrese su nombre y apellido" 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Número de tarjeta</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded-lg" 
            placeholder="0000 0000 0000 0000" 
          />
        </div>
        
        <div className="flex gap-2 mb-4">
          <input type="text" className="w-1/2 p-2 border rounded-lg" placeholder="MM / DD" />
          <input type="text" className="w-1/2 p-2 border rounded-lg" placeholder="CVV" />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">País</label>
          <select className="w-full p-2 border rounded-lg">
            <option>Venezuela</option>
            <option>Colombia</option>
            <option>Argentina</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Código Postal</label>
          <input type="text" className="w-full p-2 border rounded-lg" />
        </div>
        
        <h2 className="text-lg font-semibold mb-2">Tipo de Membresía:</h2>
        <div className="flex flex-col gap-2 mb-4">
          <label className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer" onClick={() => setPlan("mensual")}>  
            <input type="radio" name="plan" checked={plan === "mensual"} readOnly />
            <span>Plan Mensual - $5 / Mes</span>
          </label>
          <label className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer" onClick={() => setPlan("anual")}>  
            <input type="radio" name="plan" checked={plan === "anual"} readOnly />
            <span>Plan Anual - $18.00 / 12 meses (Ahorra 30%)</span>
          </label>
        </div>
        
        <button className="bg-orange-500 text-white w-full py-2 rounded-lg font-semibold hover:bg-orange-600">
          🔥 Mejorar el Plan
        </button>
      </div>
    </div>
  );
}
