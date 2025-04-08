// components/SearchBar.jsx
import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <TextField
      variant="standard"
      label="Search products..."
      size="small"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      sx={{ mb: '10px',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white', // White border
          },
          '&:hover fieldset': {
            borderColor: 'white', // White border on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white', // White border when focused
          },
        },
        '& .MuiInputLabel-root': {
          color: 'rgba(211, 204, 204, 0.6)', // Dark gray label for contrast
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'rgb(250, 247, 247)', // Dark gray label when focused
        },
        '& .MuiInputBase-input': {
          color: 'black', // Black text for input
        },
      }}
    />
  );
};

export default SearchBar;