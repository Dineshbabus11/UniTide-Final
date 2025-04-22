import React, { useState } from 'react';
import './Directory.scss';
import { Header } from '../header/Header';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Alumni } from './Alumni';

export const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header />
      <div className="directory">
        <div className="directory-tab">
          <TextField
            label="Search alumni"
            variant="outlined"
            sx={{ width: '80%' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon sx={{ fontSize: 32, color: '#3d3d3d', cursor: 'pointer' }} />
        </div>
        <div className="directory-content">
          <Alumni searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
};
