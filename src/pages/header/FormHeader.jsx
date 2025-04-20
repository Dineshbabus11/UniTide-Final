import React from 'react'
import './FormHeader.scss'
import { useLocation, useNavigate } from 'react-router-dom'

export const FormHeader = () => {

    const navigate=useNavigate();
    const location=useLocation();

    const isPage=location.pathname==='/register';
    const label=isPage?'Login':'Register';

    const handleChange=()=>{
        if(isPage){
            navigate('/login');
        }
        else{
            navigate('/register');
        }
    }

  return (
    <header>
        <h2>UniTide.</h2>
        <p onClick={handleChange}>{label}</p>
    </header>
  )
}
