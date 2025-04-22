import React from 'react';
import './Contact.scss';
import { Header } from '../header/Header';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Stack
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

export const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-page">
        <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: '16px' }}>
            <Typography variant="h4" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              We'd love to hear from you! Fill out the form below and we’ll get back to you soon.
            </Typography>

            <Box component="form" noValidate autoComplete="off">
              <Stack spacing={3}>
                <TextField label="Full Name" fullWidth required />
                <TextField label="Email Address" fullWidth required />
                <TextField label="Subject" fullWidth />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />
                <Button variant="contained" color="primary" size="large">
                  Send Message
                </Button>
              </Stack>
            </Box>

            <Box sx={{ mt: 5 }}>
              <Typography variant="h6">Contact Details</Typography>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                <EmailIcon />
                <Typography variant="body2">contact@college.edu</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                <PhoneIcon />
                <Typography variant="body2">+91 98765 43210</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                <LocationOnIcon />
                <Typography variant="body2">
                  KPR Institute of Engineering and Technology, Coimbatore, Tamil Nadu.
                </Typography>
              </Stack>
            </Box>
          </Paper>
        </Container>
      </div>
    </>
  );
};
