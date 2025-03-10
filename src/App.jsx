import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="not-found" element={<NotFound/>} />
          <Route path="profile" element={<Profile/>} />  
      </Routes>
    </BrowserRouter>
    
    
  )
}
