import React, { useState } from 'react';
import './Login.scss';
import { FormHeader } from '../header/FormHeader';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = () => {
        console.log('Login Data:', formData);
        navigate('/');
    };

    return (
        <>
            <FormHeader />
            <div className="login">
                <div className="login-content">
                    <h3>Login</h3>
                    <div className="login-form">
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            type="email"
                            fullWidth
                            sx={{ marginBottom: '30px' }}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="login-btn">
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ width: '40%', background: '#3ae374' }}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                        <p>Forgot Password?</p>
                    </div>
                </div>
            </div>
        </>
    );
};
