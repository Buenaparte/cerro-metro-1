import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const fechasOcupadas = ["2025-01-15", "2025-01-22", "2025-01-30"].map(
  (fecha) => new Date(fecha)
);

export function Booking() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const navigate = useNavigate();

  const handleSeleccionFecha = (fecha) => {
    if (fechasOcupadas.some((f) => f.toDateString() === fecha.toDateString())) {
      alert("Esta fecha ya está reservada. Elige otra.");
    } else {
      setFechaSeleccionada(fecha);
    }
  };

  const handleContinuar = () => {
    if (!fechaSeleccionada) {
      alert("Por favor selecciona una fecha antes de continuar.");
    } else {
      navigate("/payment", { state: { fecha: fechaSeleccionada.toISOString().split("T")[0] } });
    }
  };

  return (
    <div>
      <h1>Reserva tu Ruta</h1>
      <DatePicker
        selected={fechaSeleccionada}
        onChange={handleSeleccionFecha}
        minDate={new Date()} 
        excludeDates={fechasOcupadas} 
        dateFormat="yyyy-MM-dd"
        inline
      />
      <button onClick={handleContinuar}>Continuar</button>
    </div>
  );
}
