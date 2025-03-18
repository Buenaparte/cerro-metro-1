import React from "react";

export default function buscador() {
    const shoot = () => {
        alert("Great Shot!");
      }

    return(
        <p>
        <button onClick={shoot}>filtro</button><br></br>
        <label>
        <input type='checkbox'className=' filtro 1' value="etiqueta 1"></input>
        etiqueta 1  
        </label>
        <br></br>
        <label>
        <input type='checkbox'className=' filtro 2' value="etiqueta 2"></input>
        etiqueta 2  
        </label>
        <br></br>
        <label>
        <input type='checkbox'className=' filtro 3' value="etiqueta 3"></input>
        etiqueta 3  
        </label>
        <br></br>
        <label>
        <input type='checkbox'className=' filtro 4' value="etiqueta 4"></input>
        etiqueta 4  
        </label>
        <br></br>
        <label>
        <input type='checkbox'className=' filtro 5' value="etiqueta 5"></input>
        etiqueta 5  
        </label>
        <br></br>
        <label>
        <input type='checkbox'className=' filtro 6' value="etiqueta 6"></input>
        etiqueta 6  
        </label><br></br>
        <button type="submit">Aplicar filtro</button><br></br> 
        </p>
    )
}