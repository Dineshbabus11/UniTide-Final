import React from 'react';
import './Header.scss';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const navItems = ['Home', 'Contact', 'FAQ', 'Gallery'];

  return (
    <header>
      <h2 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>UniTide<span>.</span></h2>
      <div className="header-right">
        {navItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <Avatar
          src="/broken-image.jpg"
          alt="profile"
          sx={{
            cursor: 'pointer',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.15)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            },
          }}
          onClick={() => navigate('/login')}
        />
      </div>
    </header>
  );
};
