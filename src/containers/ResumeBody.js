import * as React from 'react';
import {Typography, Grid, Box, Paper, Card, Button} from '@mui/material';
import ResumeViewComponent from '../components/ResumeView';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function ResumeBody() {
    return (
        <Grid container>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" sx={{paddingBottom:'2%'}}>
                <Typography variant='h3' sx={{fontFamily:'solano-gothic-pro-mvb, sans-serif', fontWeight:'500', fontStyle: 'normal'}}>
                    Resume
                </Typography>
            </Grid>
            <Grid container display='flex' justifyContent='center' >
                <Button href='/Resume-FullStack.pdf' download={true} color='secondary' startIcon={<ArrowCircleDownIcon />} sx={{right:'-14%'}}>
                    Download
                </Button> 
                <Grid container display="flex" justifyContent="center">
                    <Card sx={{border:20, borderColor:'ThreeDLightShadow'}}>                    
                        <ResumeViewComponent sx={{border:20}}/>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
  }