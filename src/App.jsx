import React from 'react'
import './App.css'
import { Login } from './pages/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './pages/register/Register'
import { Home } from './pages/home/Home'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
