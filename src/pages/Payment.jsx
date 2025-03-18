import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const reservedDate = location.state?.fecha || "No seleccionada";
  const pricePerAdult = 124;
  const pricePerChild_Oldman = 71;

  const [adultQuantity, setAdultQuantity] = useState(0);
  const [childOldmanQuantity, setChildOldmanQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = adultQuantity * pricePerAdult + childOldmanQuantity * pricePerChild_Oldman;
    setTotal(newTotal);
    localStorage.setItem("totalPagar", newTotal);
  }, [adultQuantity, childOldmanQuantity]);

  const handleVolver = () => {
    
    navigate("/booking", { state: { fecha: reservedDate } });
  };

  return (
    <div>
      <h1>Pagar Reserva</h1>
      <p>Fecha reservada: {reservedDate}</p>

      <label>Cantidad de personas adultas:</label>
      <input
        type="number"
        min="0"
        value={adultQuantity}
        onChange={(e) => setAdultQuantity(Number(e.target.value))}
      />

      <label>Cantidad de niños o ancianos:</label>
      <input
        type="number"
        min="0"
        value={childOldmanQuantity}
        onChange={(e) => setChildOldmanQuantity(Number(e.target.value))}
      />

      <p>Total a pagar: Bs.S {total.toFixed(2)}</p>

      <button onClick={() => navigate("/payment-method")}>Pagar</button>
      <button onClick={handleVolver}>Volver</button>
    </div>
  );
}

