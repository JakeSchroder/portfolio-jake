import React, { useState, useEffect, useCallback } from "react";
import { Grid, Button, Typography, Slide, keyframes} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import {ReactComponent as PythonIcon} from '../assets/icons/python.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';
import { ReactComponent as MongoIcon } from '../assets/icons/mongodb.svg';
import { ReactComponent as NodeIcon } from '../assets/icons/nodedotjs.svg';
import { ReactComponent as NGINXIcon } from '../assets/icons/nginx.svg';

export default function AboutBody({theme}) {
    const pulsateForward = keyframes`
    0%{
        transform:scale(1)
    }
    50%{
        transform:scale(1.2)
    }
    100%{
        transform:scale(1)
    }`;
    const pulsateFwdAnime = `${pulsateForward} 10s ease-in-out infinite both`;

    const goToResume = () => {
        window.scrollTo({
            top: window.innerHeight*2.5,
            behavior: "smooth",
        });
    };
    return (
        <Grid container elevation={0} sx={{paddingTop:'5%'}}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" sx={{paddingBottom:5}}>
                <Avatar xs={12} alt="Jake Schroder" sx={{alignItems:'center', width:200, height:200}} src="https://media-exp1.licdn.com/dms/image/C4E03AQHZEsmrh6UFzA/profile-displayphoto-shrink_800_800/0/1525228018391?e=1675900800&v=beta&t=iNC2sXrGdInf5Ucm8dgALOitU6uH7xiM3Yw3-iXUBp8"/>
            </Grid>
            <Slide direction="up" in={true} timeout={{enter:1000, exit:0}} mountOnEnter unmountOnExit>
                <Grid container>
                    <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                        <Typography variant='h4' sx={{fontFamily:'solano-gothic-pro-mvb, sans-serif', fontWeight:'500', fontStyle: 'normal'}}>
                            Hi, I'm Jake
                        </Typography>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                        <Typography variant='h2' sx={{fontFamily:'solano-gothic-pro-mvb, sans-serif', fontWeight:'500', fontStyle: 'normal'}}>
                            Building digital products, brands, and experience
                        </Typography>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                        <Typography variant='h6' sx={{fontFamily:'solano-gothic-pro-mvb, sans-serif', fontWeight:'500', fontStyle: 'normal'}}>
                            A Frontend Developer and Visual Designer with experience in web design and machine learning.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" sx={{paddingTop:'1%'}}>
                        <Button variant="contained" color="secondary" onClick={goToResume} sx={{borderRadius: 28, color: theme.palette.primary.contrastText}}>
                            Resume
                        </Button>
                    </Grid>
                    <Grid container justifyContent="center" sx={{paddingTop:'6%', paddingBottom:0}}>
                        <Button href='https://www.python.org/' target='_blank' sx={{backgroundColor:'transparent', animation: pulsateFwdAnime}}>
                            <PythonIcon fill={theme.palette.secondary.light} />
                        </Button>
                        <Button href='https://reactjs.org/' target='_blank' sx={{backgroundColor:'transparent', animation: pulsateFwdAnime}}>
                            <ReactIcon fill={theme.palette.secondary.light} />
                        </Button>
                        <Button href='https://www.mongodb.com/' target='_blank' sx={{backgroundColor:'transparent', animation: pulsateFwdAnime}}>
                            <MongoIcon fill={theme.palette.secondary.light} />
                        </Button>
                        <Button href='https://nodejs.org/en/' target='_blank' sx={{backgroundColor:'transparent', animation: pulsateFwdAnime}}>
                            <NodeIcon fill={theme.palette.secondary.light} />
                        </Button>
                        <Button href='https://www.nginx.com/' target='_blank' sx={{backgroundColor:'transparent', animation: pulsateFwdAnime}}>
                            <NGINXIcon fill={theme.palette.secondary.light} />
                        </Button>
                    </Grid>
                </Grid>
                
            </Slide>
        </Grid>
    );
  }