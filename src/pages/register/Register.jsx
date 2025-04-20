import React, { useState } from 'react';
import './Register.scss';
import { FormHeader } from '../header/FormHeader';
import { TextField, MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const departments = ['CSE', 'ECE', 'EEE', 'IT', 'MECH', 'CIVIL'];
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        graduationYear: '',
        department: '',
        contactNumber: '',
        currentCompany: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegister = () => {
        console.log('Registration Data:', formData);
        navigate('/login');
    };

    return (
        <>
            <FormHeader />
            <div className="register">
                <div className="register-content">
                    <h3>Register</h3>
                    <div className="register-form">
                        <TextField
                            variant="outlined"
                            label="Full name"
                            name="fullName"
                            type="text"
                            fullWidth
                            required
                            sx={{ marginBottom: '30px' }}
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            label="Email"
                            name="email"
                            type="email"
                            fullWidth
                            required
                            sx={{ marginBottom: '30px' }}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            label="Year of Graduation"
                            name="graduationYear"
                            type="number"
                            fullWidth
                            required
                            sx={{ marginBottom: '30px' }}
                            value={formData.graduationYear}
                            onChange={handleChange}
                        />
                        <TextField
                            select
                            label="Department"
                            name="department"
                            fullWidth
                            required
                            sx={{ marginBottom: '30px' }}
                            value={formData.department}
                            onChange={handleChange}
                        >
                            {departments.map((dept) => (
                                <MenuItem key={dept} value={dept}>
                                    {dept}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            variant="outlined"
                            label="Contact number"
                            name="contactNumber"
                            type="tel"
                            fullWidth
                            required
                            sx={{ marginBottom: '30px' }}
                            value={formData.contactNumber}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            label="Current Company"
                            name="currentCompany"
                            type="text"
                            fullWidth
                            value={formData.currentCompany}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="register-btn">
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ width: '40%', background: '#3ae374' }}
                            onClick={handleRegister}
                        >
                            Register
                        </Button>
                        <p>Already have account?</p>
                    </div>
                </div>
            </div>
        </>
    );
};
