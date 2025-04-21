import React from 'react';
import './FormHeader.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export const FormHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isRegisterPage = location.pathname === '/register';
  const label = isRegisterPage ? 'Login' : 'Register';

  const handleChange = () => {
    navigate(isRegisterPage ? '/login' : '/register');
  };

  return (
    <header className="form-header">
      <h2 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        UniTide<span>.</span>
      </h2>
      <p onClick={handleChange}>{label}</p>
    </header>
  );
};
