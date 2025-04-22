import React from 'react'
import './App.css'
import { Login } from './pages/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './pages/register/Register'
import { Home } from './pages/home/Home'
import { Directory } from './pages/directory/Directory'
import { Contact } from './pages/contact/Contact'
import { Faq } from './pages/faq/Faq'
import { Gallery } from './pages/gallery/Gallery'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/directory' element={<Directory/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
