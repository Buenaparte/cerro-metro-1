import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header_NoSession from "../components/Header_NoSession";
import Footer from "../components/Footer";
import { Logo_responsive } from "../components/Logo_responsive";


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
    
    <div className="bg-gray-700">
      <Header_NoSession/>
      <div className="h-svh font-semibold gap-6 mx-auto mt-10 mb-10 flex flex-col bg-white rounded-2xl w-xl justify-center items-center shadow-black shadow-2xl">
        <Logo_responsive className="!relative !w-[201.72px] !h-[80px]" />
        <h1 className="mt-5 font-bold text-orange-600 text-3xl">Pagar Reserva</h1>
        <p className="text-sm">Fecha reservada: {reservedDate}</p>
        <form>
          <div className="mb-4">
            
            <label>Cantidad de personas adultas:</label>
            <input
              type="number"
              min="0"
              value={adultQuantity}
              onChange={(e) => setAdultQuantity(Number(e.target.value))}
              id="floating_outlined" 
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " 
            />
          </div>

          <div className="mb-4">
            <label>Cantidad de niños o adultos mayores:</label>
            
            <input
              type="number"
              min="0"
              value={childOldmanQuantity}
              onChange={(e) => setChildOldmanQuantity(Number(e.target.value))}
              id="floating_outlined" 
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" "
            />
          </div>

          <div className="mb-4"><p>Total a pagar: Bs.S {total.toFixed(2)}</p></div>
          <div className="mb-4 text-center">

            <button className="bg-lime-500 hover:bg-orange-700 active:bg-orange-900 font-semibold rounded-xl mr-4 w-15 h-8 text-amber-50 
                transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative"
                onClick={() => navigate("/payment-method")}>Pagar
            </button>

            <button className="bg-red-600 hover:bg-orange-700 active:bg-orange-900 font-semibold rounded-xl w-15 h-8 text-amber-50 
                transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 position:relative"
                onClick={handleVolver}>Volver
            </button>
          </div>
          
        </form>
      </div>
      <Footer/>
    </div>
  );
}

