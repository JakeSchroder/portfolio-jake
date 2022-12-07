import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import ProjectCardComponents from '../components/ProjectCard';

export default function PageBody() {
    return (
        <Paper sx={{height:'1000px', paddingTop:'50px'}}>
            <ProjectCardComponents/>
        </Paper>
    );
  }