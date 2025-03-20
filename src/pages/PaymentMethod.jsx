import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header_NoSession from "../components/Header_NoSession";
import Footer from "../components/Footer";
import { Logo_responsive } from "../components/Logo_responsive";

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
    navigate("/");
  };

  return (
    <>
    <div className="bg-gray-700 h-full w-screen">
      <Header_NoSession />
      <div className="h-svh font-semibold gap-6 mx-auto mt-10 mb-10 flex flex-col bg-white rounded-2xl w-xl justify-center items-center shadow-black shadow-2xl">
        <Logo_responsive className="!relative !w-[201.72px] !h-[80px]" />
        
        
        {!mostrarFormulario &&(
          <>
          <h1 className="mt-5 font-bold text-orange-600 text-3xl">Selecciona tu método de pago</h1>
          <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 font-semibold rounded-xl w-35 h-12 text-amber-50 
                transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative"
                onClick={() => setMostrarFormulario(true)}>Pagar con PayPal
          </button>
          <div className=" text-center">
            <button className="mb-4 bg-red-500 hover:bg-red-700 active:bg-red-900 font-semibold rounded-xl w-15 h-8 text-amber-50 
                    transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative"
                    onClick={() => navigate("/payment") }>Volver
            </button>
          </div>
        </>
        
        )}

        {mostrarFormulario && (
          <>
            <div className="mx-auto mt-10 mb-10 flex flex-col  justify-center items-center ">
              <h1 className="mt-5 font-bold text-blue-600 text-3xl">Pago con Paypal</h1>
              <p className="mt-4">Monto a pagar: Bs.S {monto}</p>
              <form onSubmit={handlePago} className="mt-4">
                <div className="relative">
                  <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                  <label for="floating_outlined" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                      Nombre:
                  </label>
                </div>
                
                <div className="relative mt-4">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                  <label for="floating_outlined" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                    Correo Electrónico:
                  </label>
                </div> 
                <div className="text-center mt-4"> 
                  <button className=" bg-lime-500 hover:bg-lime-700 active:bg-lime-900 font-semibold rounded-xl w-35 h-8 text-amber-50 
                      transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative"
                  type="submit">Confirmar Pago</button>
                </div>
              </form>
            </div>
            <div className=" text-center">
              <button className="mb-4 bg-red-500 hover:bg-red-700 active:bg-red-900 font-semibold rounded-xl w-15 h-8 text-amber-50 
                      transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative"
              onClick={() => setMostrarFormulario(false)}>Volver</button>
            </div>
          </>
        )}
        
        
      </div>
      <Footer />
    </div>
    </>
  );
}
