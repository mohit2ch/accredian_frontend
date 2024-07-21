import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

export default function Header(params) {
    const navItems = ["Refer & Earn", "Resources", "About Us"];
    return (
        <AppBar component="nav" style={{background:'#508C9B', }} position='static'>
        <Toolbar  style={{display: 'flex', justifyContent:'space-between'}}>
          
          <h2 style={{color:'#fff'}}>
            accredian</h2>
          
          <Box sx={{ display: { xs: 'none', sm: 'block'  } }}>
            
            {navItems.map((item) => (
              <Button key={item} style={{color:'#134B70', textTransform: 'capitalize', margin:'0 15px' }}>
                {item}
              </Button>
            ))}
            
            <ButtonGroup>
  <Button style={{background:'#134B70', color:'#EEEEEE', marginLeft:'20px'}}>Login</Button>
  <Button  style={{textTransform:'capitalize', background: '#EEEEEE', color: '#508C9B'}}>Try for Free</Button>
  </ButtonGroup>
  

          </Box>
        </Toolbar>
      </AppBar>
    )
};
