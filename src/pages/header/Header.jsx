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
            <Avatar src="/broken-image.jpg" onClick={()=>navigate('/login')} sx={{cursor:'pointer',transition:'transform 0.3s ease',
                '&:hover':{
                    transform:'scale(1.1)'
                }
            }}/>
        </div>
    </header>
  )
}
