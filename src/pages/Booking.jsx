import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { db } from "../credentials";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../credentials";  
import Header_NoSession from '../components/Header_NoSession';

export function Booking() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [fechasOcupadas, setFechasOcupadas] = useState([]);
  const [usuario, setUsuario] = useState(null);  
  const navigate = useNavigate();
  const location = useLocation();  

  
  useEffect(() => {
    if (location.state?.fecha) {
      setFechaSeleccionada(new Date(location.state.fecha));
    }
  }, [location]);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);  
        obtenerFechas(user); 
      } else {
        setUsuario(null);  
      }
    });

    
    return () => unsubscribe();
  }, []);

  
  const obtenerFechas = async (user) => {
    try {
      const q = query(
        collection(db, "reservas"),
        where("userId", "==", user.uid)  
      );
      const querySnapshot = await getDocs(q);
      const fechas = querySnapshot.docs.map((doc) => {
        const fecha = new Date(doc.data().fecha);
        return fecha instanceof Date && !isNaN(fecha) ? fecha : null;
      }).filter(Boolean);
      setFechasOcupadas(fechas);
    } catch (error) {
      console.error("Error obteniendo fechas ocupadas:", error);
    }
  };

  const handleSeleccionFecha = (fecha) => {
    
    if (fechasOcupadas.some((f) => f.getTime() === fecha.getTime())) {
      alert("Esta fecha ya está reservada. Elige otra.");
    } else {
      setFechaSeleccionada(fecha);
    }
  };

  const handleContinuar = async () => {
    if (!fechaSeleccionada) {
      alert("Por favor selecciona una fecha antes de continuar.");
      return;
    }

    try {
      
      await addDoc(collection(db, "reservas"), {
        fecha: fechaSeleccionada.toISOString(),
        userId: usuario.uid  
      });

      
      setFechasOcupadas((prevFechas) => [...prevFechas, fechaSeleccionada]);

      
      navigate("/payment", { state: { fecha: fechaSeleccionada.toISOString().split("T")[0] } });
    } catch (error) {
      console.error("Error al guardar la reserva: ", error);
    }
  };

  
  useEffect(() => {
    if (usuario) {
      obtenerFechas(usuario);  
    }
  }, [usuario]);

  return (
    <>
      <Header_NoSession/>
      <div>
        <h1>Reserva tu Ruta</h1>
        <DatePicker
          className="bg-gray-600"
          selected={fechaSeleccionada}
          onChange={handleSeleccionFecha}
          minDate={new Date()} 
          excludeDates={fechasOcupadas} 
          dateFormat="yyyy-MM-dd"
          inline
        />
        <button onClick={handleContinuar}>Continuar</button>
      </div>
    </>
  );
}
