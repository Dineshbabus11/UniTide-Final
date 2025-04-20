import React from 'react'
import './Header.scss'
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate=useNavigate();
  return (
    <header>
        <h2>UniTide.</h2>
        <div className="header-right">
            <p>Home</p>
            <p>Contact</p>
            <p>FAQ</p>
            <p>Gallery</p>
            <Avatar src="/broken-image.jpg" onClick={()=>navigate('/login')} sx={{cursor:'pointer',transition:'transform 0.3s ease',boxShadow:' rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                '&:hover':{
                    transform:'scale(1.1)'
                }
            }}/>
        </div>
    </header>
  )
}
