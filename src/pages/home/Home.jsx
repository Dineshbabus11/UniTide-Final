import React from 'react';
import './Home.scss';
import { Header } from '../header/Header';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { PieChart } from 'react-minimal-pie-chart';
import { Divider, Typography } from '@mui/material';

export const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home-slider">
          <Slide easing="ease">
            <div className="slider">
              <h1>Welcome to Unitide</h1>
              <p>Your gateway to digital innovation – connecting alumni across the globe.</p>
            </div>

            <div className="slider">
              <h1>What We Offer</h1>
              <p>Events, job opportunities, alumni network, and more – all in one place.</p>
            </div>

            <div className="slider">
              <h1>Stay Connected</h1>
              <p>Join a growing community of achievers. Inspire and be inspired.</p>
            </div>
          </Slide>
        </div>

        <div className="home-updates">
          <div className="statistics">
            <Typography variant="h6" gutterBottom>
              Alumni Stats
            </Typography>
            <PieChart
              data={[
                { title: 'Placed', value: 60, color: '#4CAF50' },
                { title: 'Higher Studies', value: 25, color: '#2196F3' },
                { title: 'Entrepreneurs', value: 15, color: '#FFC107' },
              ]}
              style={{ height: '180px' }}
              animate
              label={({ dataEntry }) => `${dataEntry.value}%`}
              labelStyle={{ fontSize: '6px', fill: '#000' }}
              radius={42}
              labelPosition={112}
            />
          </div>
          <Divider orientation="vertical" flexItem />
          <div className="updates">
            <Typography variant="h6" gutterBottom>
              Recent Updates
            </Typography>
            <ul>
              <li>🗓️ Alumni Meetup 2025 – Register Now</li>
              <li>📢 New Job Postings in Tech & Finance</li>
              <li>🎓 2024 Batch Graduation Ceremony Recap</li>
            </ul>
          </div>
        </div>

        <div className="home-nav">
          <div className="nav">
            <h3>📅 Upcoming Events</h3>
            <p>3 new events</p>
          </div>

          <div className="nav">
            <h3>📰 Latest News</h3>
            <p>4 announcements</p>
          </div>

          <div className="nav">
            <h2>+100</h2>
            <h3>Registered Alumni</h3>
          </div>
        </div>
      </div>
    </>
  );
};
