import React from 'react';
import './Register.scss';
import { FormHeader } from '../header/FormHeader';
import {
  TextField,
  MenuItem,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export const Register = () => {
  const navigate = useNavigate();
  const departments = ['CSE', 'ECE', 'EEE', 'IT', 'MECH', 'CIVIL'];

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      graduationYear: '',
      department: '',
      contactNumber: '',
      currentCompany: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      graduationYear: Yup.number()
        .min(2000, 'Year must be after 2000')
        .max(new Date().getFullYear() + 10, 'Invalid year')
        .required('Graduation year is required'),
      department: Yup.string().required('Department is required'),
      contactNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Enter a valid 10-digit number')
        .required('Contact number is required'),
      currentCompany: Yup.string().nullable(),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await axios.post('https://your-api.com/api/register', values); // Replace with real API
        navigate('/login');
      } catch (error) {
        setErrors({ api: error.response?.data?.message || 'Something went wrong!' });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <FormHeader />
      <div className="register">
        <div className="register-card">
          <h2>Join UniTide</h2>
          <p>Please fill in the details to create your account</p>
          <form className="register-form" onSubmit={formik.handleSubmit}>
            {formik.errors.api && (
              <Typography color="error" sx={{ mb: 1 }}>
                {formik.errors.api}
              </Typography>
            )}

            <TextField
              label="Full Name"
              name="fullName"
              variant="outlined"
              fullWidth
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              label="Year of Graduation"
              name="graduationYear"
              type="number"
              variant="outlined"
              fullWidth
              value={formik.values.graduationYear}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.graduationYear && Boolean(formik.errors.graduationYear)}
              helperText={formik.touched.graduationYear && formik.errors.graduationYear}
            />
            <TextField
              select
              label="Department"
              name="department"
              variant="outlined"
              fullWidth
              value={formik.values.department}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.department && Boolean(formik.errors.department)}
              helperText={formik.touched.department && formik.errors.department}
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
              value={formik.values.contactNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
              helperText={formik.touched.contactNumber && formik.errors.contactNumber}
            />
            <TextField
              label="Current Company"
              name="currentCompany"
              variant="outlined"
              fullWidth
              value={formik.values.currentCompany}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <div className="register-actions">
              <Button
                type="submit"
                variant="contained"
                disabled={formik.isSubmitting}
                sx={{
                  backgroundColor: '#32ff7e',
                  color: '#000',
                  fontWeight: 600,
                  '&:hover': { backgroundColor: '#28e76d' },
                }}
              >
                {formik.isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Register'}
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
