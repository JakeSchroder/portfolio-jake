import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CallMadeIcon from '@mui/icons-material/CallMade';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Grid, Toolbar, Button} from '@mui/material';
import MessageFormComponent from '../components/MessageForm';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { ReactComponent as Logo } from "../logo.svg";

export default function Header({mode, setMode}) {
    const handleClick = () =>{
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }

    return (
        <Grid container justifyContent='center' rowGap={0}>
            <Toolbar >
                <Button color="inherit" >About</Button>
                <Button color="inherit">Projects</Button>
                <MessageFormComponent/>
                <Button variant="contained" color="secondary" sx={{borderRadius: 28}} endIcon={<CallMadeIcon/>}>Resume</Button>
                <IconButton size="large" onClick={handleClick} >
                    {mode === 'dark' ? <LightModeIcon fontSize='inherit'/> : <NightsStayIcon fontSize='inherit'/>}
                </IconButton>
            </Toolbar>
        </Grid>
    );
}
