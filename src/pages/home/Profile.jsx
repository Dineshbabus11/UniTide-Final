import React from 'react';
import './Profile.scss';
import {
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Dialog,
  Slide,
  Box,
  Divider,
  Grid,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Profile = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-box-outer">
        <div className="profile-box-inner">
          <Button
            variant="text"
            onClick={handleClickOpen}
            className="view-profile-button"
            startIcon={<Avatar sx={{ width: 24, height: 24, bgcolor: '#00e676' }} />}
            sx={{ color: 'black', fontFamily: 'poppins', fontSize: '1.1rem' }}
          >
            View Profile
          </Button>
        </div>
      </div>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', bgcolor: '#3d3d3d' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Profile
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              SAVE
            </Button>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            background: 'linear-gradient(to right, #3d3d3d)',
            py: 6,
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <Avatar sx={{ width: 90, height: 90, mx: 'auto', mb: 2, bgcolor: '#00c853' }} />
          <Typography variant="h5" fontWeight={600}>
            Dinesh Babu S
          </Typography>
          <Typography variant="subtitle1">React Developer</Typography>
        </Box>

        <Box sx={{ p: 4, maxWidth: 700, mx: 'auto' }}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">Full Name</Typography>
                <Typography variant="body1">Dinesh Babu S</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">Email</Typography>
                <Typography variant="body1">mail@gmail.com</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">Graduation Year</Typography>
                <Typography variant="body1">2026</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">Department</Typography>
                <Typography variant="body1">Information Technology</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">Contact</Typography>
                <Typography variant="body1">+91 9876543210</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">Current Company</Typography>
                <Typography variant="body1">ABC Private Limited</Typography>
              </Grid>
            </Grid>

          </Paper>
        </Box>
      </Dialog>
    </div>
  );
};
