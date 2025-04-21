import React, { useState } from 'react';
import './Login.scss';
import { FormHeader } from '../header/FormHeader';
import TextField from '@mui/material/TextField';
import { Button, Typography, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorOpen, setErrorOpen] = useState(false); // Snackbar state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    if (formData.email === 'mail@gmail.com' && formData.password === '12345678') {
      console.log('Login Data:', formData);
      navigate('/');
    } else {
      setErrorOpen(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setErrorOpen(false);
  };

  return (
    <>
      <FormHeader />
      <div className="login">
        <div className="login-card">
          <h2>Welcome Back!</h2>
          <p>Please enter your login details</p>
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              sx={{ marginBottom: '20px' }}
              required
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="login-actions">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#32ff7e',
                  color: '#000',
                  fontWeight: 600,
                  '&:hover': { backgroundColor: '#28e76d' },
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Typography variant="body2" className="forgot-text">
                Forgot Password?
              </Typography>
            </div>
          </form>
        </div>
      </div>

      {/* Snackbar Alert */}
      <Snackbar
        open={errorOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          Invalid email or password. Please try again.
        </Alert>
      </Snackbar>
    </>
  );
};
