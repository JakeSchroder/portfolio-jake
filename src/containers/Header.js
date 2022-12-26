import React, { useState, useEffect, useCallback } from "react";
import { Grid, Toolbar, Button, IconButton, keyframes} from '@mui/material';
import MessageFormComponent from '../components/MessageForm';
import CallMadeIcon from '@mui/icons-material/CallMade';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';

export default function Header({mode, setMode}) {
    const [clicked, setClicked] = useState(false);
    const rotateScaleUp = keyframes`
        0% {
            transform: scale(1) rotateZ(0);
        }
        50% {
            transform: scale(2) rotateZ(180deg);
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
            top: window.innerHeight*.85,
            behavior: "smooth",
        });
    };
    const toggleDarkMode = () =>{
        setClicked(true)
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
        setTimeout(() => {
            setClicked(false)
        }, 500)
    }

    return (
        <Grid container justifyContent='center' rowGap={0}>
            <Toolbar >
                <Button color="inherit" onClick={goToAbout}>About</Button>
                <Button color="inherit" onClick={goToProjects}>Projects</Button>
                <MessageFormComponent/>
                <Button variant="contained" color="secondary" href='/Resume-FullStack.pdf' target="_blank" sx={{borderRadius: 28}} endIcon={<CallMadeIcon/>}>
                    Resume
                </Button>
                <IconButton size="large" onClick={toggleDarkMode} sx={{ animation: clicked ? `${rotateScaleUp} .5s linear both` : ''}}>
                    {mode === 'dark' ? <LightModeIcon fontSize='inherit' /> : <NightsStayIcon fontSize='inherit'/>}
                </IconButton>
            </Toolbar>
        </Grid>
    );
}
