import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function PaymentMethod() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [monto, setMonto] = useState(0);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    const total = localStorage.getItem("totalPagar");
    if (total) {
      setMonto(total);
    }
  }, []);

  const handlePago = (e) => {
    e.preventDefault();
    if (!nombre || !email) {
      alert("Por favor completa todos los campos.");
      return;
    }
    alert(`Pago exitoso. Gracias por tu compra, ${nombre}!`);
    navigate("/home");
  };

  return (
    <div>
      <h1>Selecciona tu método de pago</h1>
      <button>Tarjeta de Crédito</button>
      <button>Pago Móvil</button>
      <button>Transferencia Bancaria</button>
      <button onClick={() => setMostrarFormulario(true)}>Pagar con PayPal</button>

      {mostrarFormulario && (
        <div>
          <h2>Pago con PayPal</h2>
          <p>Monto a pagar: Bs.S {monto}</p>
          <form onSubmit={handlePago}>
            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

            <label>Correo Electrónico:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <button type="submit">Confirmar Pago</button>
          </form>
        </div>
      )}

      <button onClick={() => navigate("/payment")}>Volver</button>
    </div>
  );
}
