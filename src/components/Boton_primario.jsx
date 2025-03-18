import React from "react";
import { useNavigate } from "react-router";




export default function Boton_primario( {text , link}) {
    const navigation = useNavigate();
    return (
            <button onClick={()=> navigation(link)} className="btn btn-gradient btn-accent ">
            {text}
            
            </button> 
    );
}