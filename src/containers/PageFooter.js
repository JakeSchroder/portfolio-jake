import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid, IconButton, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function PageFooter() {
    return (
        <Paper sx={{backgroundColor:'#8E24AA', height:'200px'}}>
            <IconButton size="large">
                <GitHubIcon fontSize='inherit'/>
            </IconButton>
            <IconButton size="large">
                <LinkedInIcon fontSize='inherit'/>
            </IconButton>
        </Paper>
    );
  }