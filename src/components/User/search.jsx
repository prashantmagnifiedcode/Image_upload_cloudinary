import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase() {

  
  return (
    <div
      
      style={{ p: '2px 4px', display: 'flex', alignItems: 'center',background:"white","border-radius":"5px" }}
       
    >
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    
      <InputBase
        sx={{ ml: 1, flex: 1,color:"#4f46e5"  }}
        placeholder="Search Box"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      
    </div>
  );
}
