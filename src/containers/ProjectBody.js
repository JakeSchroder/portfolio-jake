import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import ProjectCardComponent from '../components/ProjectCard';

export default function ProjectBody() {
    const projectData=[
        {
            'name': 'Packrat',
            'gitPage': 'https://github.com/JakeSchroder/EverythingEverywhere',
            'link': 'www.packrat.shop',
            'text': 'ReactJS, ExpressJS, MongoDB, Python',
            'img': 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12153852/American-Eskimo-Dog-standing-in-the-grass-in-bright-sunlight-400x267.jpg'
        },
        {
            'name': 'Spotify Wrapped',
            'gitPage': 'https://github.com/JakeSchroder/EverythingEverywhere',
            'link': 'www.packrat.shop',
            'text': 'ReactJS, ExpressJS, MongoDB, Python',
            'img': 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12153852/American-Eskimo-Dog-standing-in-the-grass-in-bright-sunlight-400x267.jpg'
        },
        {
            'name': 'Spotify Wrapped',
            'gitPage': 'https://github.com/JakeSchroder/EverythingEverywhere',
            'link': 'www.packrat.shop',
            'text': 'ReactJS, ExpressJS, MongoDB, Python',
            'img': 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12153852/American-Eskimo-Dog-standing-in-the-grass-in-bright-sunlight-400x267.jpg'
        },
        {
            'name': 'Spotify Wrapped',
            'gitPage': 'https://github.com/JakeSchroder/EverythingEverywhere',
            'link': 'www.packrat.shop',
            'text': 'ReactJS, ExpressJS, MongoDB, Python',
            'img': 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12153852/American-Eskimo-Dog-standing-in-the-grass-in-bright-sunlight-400x267.jpg'
        },
        {
            'name': 'Packrat',
            'gitPage': 'https://github.com/JakeSchroder/EverythingEverywhere',
            'link': 'www.packrat.shop',
            'text': 'ReactJS, ExpressJS, MongoDB, Python',
            'img': 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12153852/American-Eskimo-Dog-standing-in-the-grass-in-bright-sunlight-400x267.jpg'
        },
        {
            'name': 'Spotify Wrapped',
            'gitPage': 'https://github.com/JakeSchroder/EverythingEverywhere',
            'link': 'www.packrat.shop',
            'text': 'ReactJS, ExpressJS, MongoDB, Python',
            'img': 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12153852/American-Eskimo-Dog-standing-in-the-grass-in-bright-sunlight-400x267.jpg'
        }
    ]
      
    return (
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
    );
  }