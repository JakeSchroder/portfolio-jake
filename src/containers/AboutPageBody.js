import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ProjectPageBody() {
    return (
        <Paper elevation={0} sx={{height:'1000px', paddingTop:'50px'}}>
            <Avatar alt="Jake Schroder" sx={{width:400, height:400}} src="https://media-exp1.licdn.com/dms/image/C4E03AQHZEsmrh6UFzA/profile-displayphoto-shrink_800_800/0/1525228018391?e=1675900800&v=beta&t=iNC2sXrGdInf5Ucm8dgALOitU6uH7xiM3Yw3-iXUBp8"/>
            <Typography variant='h1'>Jake Schroder</Typography>
        </Paper>
    );
  }