import React, { useState, useEffect, useCallback } from "react";
import { Grid, Toolbar, Button, IconButton, keyframes} from '@mui/material';
import MessageFormComponent from '../components/MessageForm';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Header({colorMode, setColorMode, theme}) {
  

    const [clicked, setClicked] = useState(false);
    const rotateScaleUp = keyframes`
        0% {
            transform: scale(1) rotateZ(0);
        }
        50% {
            transform: scale(.75) rotateZ(180deg);
        }
        100% {
            transform: scale(1) rotateZ(360deg);
        }`;

    const goToAbout = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const goToProjects = () => {
        window.scrollTo({
            top: window.innerHeight*1.1,
            behavior: "smooth",
        });
    };
    const goToResume = () => {
        window.scrollTo({
            top: window.innerHeight*2.5,
            behavior: "smooth",
        });
    };
    const toggleDarkMode = () =>{
        setClicked(true)
        setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
        setTimeout(() => {
            setClicked(false)
        }, 500)
    }

    return (
        <Grid container justifyContent='center' rowGap={0}>
            <Toolbar>
                <Button color="inherit" onClick={goToAbout}>About</Button>
                <Button color="inherit" onClick={goToProjects}>Projects</Button>
                <MessageFormComponent/>
                <Button variant="contained" color="secondary" onClick={goToResume} sx={{borderRadius: 28, color: theme.palette.primary.contrastText}} >
                    Resume
                </Button>
                <IconButton size="large" onClick={toggleDarkMode} sx={{ animation: clicked ? `${rotateScaleUp} .5s linear both` : ''}}>
                    {colorMode === 'dark' ? <Brightness7Icon fontSize='inherit' sx={{fill: theme.palette.secondary.light}} /> : <Brightness4Icon fontSize='inherit' sx={{fill: theme.palette.secondary.light}}/>}
                </IconButton>
            </Toolbar>
        </Grid>
    );
}
