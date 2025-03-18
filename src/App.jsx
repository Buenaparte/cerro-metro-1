import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import { Booking } from './pages/Booking' 
import { Payment } from './pages/Payment'
import { PaymentMethod } from './pages/PaymentMethod'
import { Membership } from './pages/Membreship' 


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="not-found" element={<NotFound/>} />
          <Route path="profile" element={<Profile/>} /> 
          <Route path="booking" element={<Booking/>} />
          <Route path="payment" element={<Payment/>} /> 
          <Route path="payment-method" element={<PaymentMethod/>} />
          <Route path="membership" element={<Membership/>} />
      </Routes>
    </BrowserRouter>
    
    
  )
}
