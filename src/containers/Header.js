import React, { useState, useEffect, useCallback } from "react";
import { Grid, Toolbar, Button, IconButton, keyframes} from '@mui/material';
import MessageFormComponent from '../components/MessageForm';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {Link} from 'react-scroll';

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
                <Button color="inherit" ><Link to='aboutBody' spy={true} smooth={true} offset={-90}>About</Link></Button>
                <Button color="inherit"><Link to='projectBody' spy={true} smooth={true} offset={-230}>Projects</Link></Button>
                <MessageFormComponent/>
                <Button variant="contained" color="secondary" sx={{borderRadius: 28, color: theme.palette.primary.contrastText}} >
                    <Link to='resumeBody' spy={true} smooth={true} offset={-90}>
                        Resume
                    </Link>
                </Button>
                <IconButton size="large" onClick={toggleDarkMode} sx={{ animation: clicked ? `${rotateScaleUp} .5s linear both` : ''}}>
                    {colorMode === 'dark' ? <Brightness7Icon fontSize='inherit' sx={{fill: theme.palette.secondary.light}} /> : <Brightness4Icon fontSize='inherit' sx={{fill: theme.palette.secondary.light}}/>}
                </IconButton>
            </Toolbar>
        </Grid>
    );
}
