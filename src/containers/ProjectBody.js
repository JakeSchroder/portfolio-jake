import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import ProjectCardComponent from '../components/ProjectCard';

export default function ProjectBody() {
    const projectData=[
        {
            'name': 'Packrat',
            'gitPage': 'https://github.com/JakeSchroder/EverythingEverywhere',
            'link': 'http://www.packrat.shop',
            'text': 'ReactJS, NodeJS, ExpressJS, MongoDB, Python',
            'img': '/packrat-card.png'
        },
        {
            'name': 'Portfolio Site',
            'gitPage': 'https://github.com/JakeSchroder/portfolio-jake',
            'link': 'https://github.com/JakeSchroder/portfolio-jake',
            'text': 'ReactJS, NGINX',
            'img': '/portfolio-card.png'
        }
    ]
      
    return (
        <Grid>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" sx={{paddingBottom:5}}>
                <Typography variant='h3' sx={{fontFamily:'solano-gothic-pro-mvb, sans-serif', fontWeight:'500', fontStyle: 'normal'}}><b>Projects</b></Typography>
            </Grid>
            <Grid container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                columns={4}
                rowSpacing={1}
                sx={{paddingLeft:'10%', paddingRight:'10%', paddingBottom:'10%', margin:0}}
            >
                {projectData.map((project, index) => ProjectCardComponent({...project}, index))}
            </Grid>
        </Grid>
    );
  }