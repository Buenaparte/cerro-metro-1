import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Search_Routes from './pages/Search_Routes'
import Informacion_Rutas from './pages/Informacion_Rutas'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="not-found" element={<NotFound/>} />
          <Route path="profile" element={<Profile/>} /> 
          <Route path="search_routes" element={<Search_Routes/>} />  
          <Route path="/item/:id" element={<Informacion_Rutas/>} />  
      </Routes>
    </BrowserRouter>
    
    
  )
}
