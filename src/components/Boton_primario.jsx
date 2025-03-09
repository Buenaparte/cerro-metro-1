import React from "react";
import { useNavigate } from "react-router";




export default function Boton_primario( {text , link}) {
    const navigation = useNavigate();
    return (
        <button onClick={()=> navigation(link)} className="font-bold px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-950 active:bg-orange-600 whitespace-nowrap rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        {text}
        </button>
    );
}