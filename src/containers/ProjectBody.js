import * as React from 'react';
import { Grid, Typography, Button, Slide } from '@mui/material';
import ProjectCardComponent from '../components/ProjectCard';
import { useInView } from 'react-intersection-observer';

export default function ProjectBody() {
    const projectData=[
        {
            'name': 'Packrat',
            'gitPage': 'https://github.com/JakeSchroder/EverythingEverywhere',
            'link': 'http://www.packrat.shop',
            'text': 'ReactJS, NodeJS, ExpressJS, MongoDB, Python',
            'img': '/images/packrat-card.png'
        },
        {
            'name': 'Portfolio Site',
            'gitPage': 'https://github.com/JakeSchroder/portfolio-jake',
            'link': 'http://jake-schroder.com',
            'text': 'ReactJS, NGINX',
            'img': '/images/portfolio-card.png'
        }
    ]
    
    const { ref, inView, entry } = useInView({
        threshold: .2,
        delay: 300,
        triggerOnce: true
    });

    return (
        <Grid ref={ref} container>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" sx={{paddingBottom:'2%'}}>
                <Typography variant='h3' sx={{fontFamily:'solano-gothic-pro-mvb, sans-serif', fontWeight:'500', fontStyle: 'normal'}}><b>What I've worked on</b></Typography>
            </Grid>
            <Slide direction="up" in={inView} timeout={{enter:1000, exit:0}} mountOnEnter unmountOnExit>
                <Grid container>
                    <Grid container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        columns={4}
                        rowSpacing={1}
                        sx={{paddingLeft:'10%', paddingRight:'10%', paddingBottom:'3%', margin:0}}>
                        {projectData.map((project, index) => ProjectCardComponent({...project}, index))}
                    </Grid>
                    <Grid  item xs={12} display="flex" justifyContent="center" alignItems="center">
                        <Button variant="contained" color="secondary" href='https://github.com/JakeSchroder' target="_blank" sx={{borderRadius: 28}}>
                            See more
                        </Button>
                    </Grid>
                </Grid>
            </Slide>
        </Grid>

    );
  }