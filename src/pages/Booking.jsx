import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { db } from "../credentials";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../credentials";  
import Header_NoSession from '../components/Header_NoSession';
import Footer from "../components/Footer";
import { Logo_responsive } from "../components/Logo_responsive";

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
      <div className="Container bg-gray-700 h-full w-screen">
        <Header_NoSession/>
        <div className="text-center h-svh mx-auto mt-10 mb-10 flex flex-col bg-white rounded-2xl w-xl justify-center items-center shadow-black shadow-2xl">
          <Logo_responsive className="!relative !w-[201.72px] !h-[80px]" />
          <h1 className="mt-5 font-bold text-orange-600 text-3xl">Reserva tu Ruta</h1>
          <div className="mt-5">
            <DatePicker
            className="bg-gray-900 absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            selected={fechaSeleccionada}
            onChange={handleSeleccionFecha}
            minDate={new Date()} 
            excludeDates={fechasOcupadas} 
            dateFormat="yyyy-MM-dd"
            inline
            />
            
          </div>
          <button className=" mt-5 bg-blue-500 hover:bg-blue-700 active:bg-blue-900 font-semibold rounded-xl w-35 h-8 text-amber-50 
                      transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative" 
                      onClick={handleContinuar}>Continuar</button>
        </div>
        <Footer/>
      </div>
      
    </>
  );
}
