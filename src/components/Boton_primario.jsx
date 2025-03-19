import React from "react";
import { useNavigate } from "react-router";




export default function Boton_primario( {text , link}) {
    const navigation = useNavigate();
    return (
            <button onClick={()=> navigation(link)} className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-orange-700 active:bg-orange-900 font-semibold shadow-xl rounded-xl w-35 h-12 text-amber-50 
              transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative">
            {text}
            
            </button> 
    );
}