import React from 'react';
import './Gallery.scss';
import { Header } from '../header/Header';
import { Container, Typography, ImageList, ImageListItem, Paper } from '@mui/material';

export const Gallery = () => {
  const galleryImages = [
    {
      img: 'https://source.unsplash.com/random/800x600?college',
      title: 'Convocation Day',
    },
    {
      img: 'https://source.unsplash.com/random/800x600?friends',
      title: 'Alumni Meet 2023',
    },
    {
      img: 'https://source.unsplash.com/random/800x600?graduation',
      title: 'Graduation Memories',
    },
    {
      img: 'https://source.unsplash.com/random/800x600?campus',
      title: 'Campus View',
    },
    {
      img: 'https://source.unsplash.com/random/800x600?students',
      title: 'Classroom Moments',
    },
    {
      img: 'https://source.unsplash.com/random/800x600?celebration',
      title: 'Cultural Fest',
    },
  ];

  return (
    <>
      <Header />
      <div className="gallery-page">
        <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: '16px' }}>
            <Typography variant="h4" gutterBottom>
              Photo Gallery
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              A glimpse into the vibrant moments of our alumni and campus life.
            </Typography>

            <ImageList variant="masonry" cols={3} gap={12}>
              {galleryImages.map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    src={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: '12px' }}
                  />
                  <Typography variant="caption" display="block" align="center" sx={{ mt: 1 }}>
                    {item.title}
                  </Typography>
                </ImageListItem>
              ))}
            </ImageList>
          </Paper>
        </Container>
      </div>
    </>
  );
};
