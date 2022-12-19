import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid, IconButton, Paper, Typography} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Grid container justifyContent='center' sx={{backgroundColor:'#8E24AA', height:'200px'}}>
            <IconButton size='large' target='_blank' href='https://github.com/JakeSchroder'>
                <GitHubIcon fontSize='inherit'/>
            </IconButton>
            <IconButton size='large' target='_blank' href='https://www.linkedin.com/in/jakeschroder/'>
                <LinkedInIcon fontSize='inherit'/>
            </IconButton>
        </Grid>
    );
  }