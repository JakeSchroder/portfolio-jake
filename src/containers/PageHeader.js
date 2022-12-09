import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CallMadeIcon from '@mui/icons-material/CallMade';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Grid } from '@mui/material';
import { positions } from '@mui/system';
import MessageFormComponent from '../components/MessageForm';

export default function PageHeader() {
  return (
        <Toolbar>
            <Box display='flex' flexGrow={1}>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
            </Box>

            <Button color="inherit">About</Button>
            <Button color="inherit">Projects</Button>
            <MessageFormComponent/>
            <Button variant="contained" color="secondary" sx={{borderRadius: 28}} endIcon={<CallMadeIcon/>}>Resume</Button>
            <IconButton size="large">
                <LightModeIcon fontSize='inherit'/>
            </IconButton>
        </Toolbar>
  );
}
