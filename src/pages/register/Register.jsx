import React, { useState } from 'react';
import './Register.scss';
import { FormHeader } from '../header/FormHeader';
import { TextField, MenuItem, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const departments = ['CSE', 'ECE', 'EEE', 'IT', 'MECH', 'CIVIL'];
  const navigate = useNavigate();

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    console.log('Registration Data:', formData);
    navigate('/login');
  };

  return (
    <>
      <FormHeader />
      <div className="register">
        <div className="register-card">
          <h2>Join UniTide</h2>
          <p>Please fill in the details to create your account</p>
          <form className="register-form" onSubmit={(e) => e.preventDefault()}>
            <TextField
              label="Full Name"
              name="fullName"
              variant="outlined"
              fullWidth
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Year of Graduation"
              name="graduationYear"
              type="number"
              variant="outlined"
              fullWidth
              required
              value={formData.graduationYear}
              onChange={handleChange}
            />
            <TextField
              select
              label="Department"
              name="department"
              variant="outlined"
              fullWidth
              required
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
              label="Contact Number"
              name="contactNumber"
              type="tel"
              variant="outlined"
              fullWidth
              required
              value={formData.contactNumber}
              onChange={handleChange}
            />
            <TextField
              label="Current Company"
              name="currentCompany"
              variant="outlined"
              fullWidth
              value={formData.currentCompany}
              onChange={handleChange}
            />
            <div className="register-actions">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#32ff7e',
                  color: '#000',
                  fontWeight: 600,
                  '&:hover': { backgroundColor: '#28e76d' },
                }}
                onClick={handleRegister}
              >
                Register
              </Button>
              <Typography variant="body2" className="login-text">
                Already have an account?
              </Typography>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
