import { Grid, Toolbar, Button, IconButton} from '@mui/material';
import MessageFormComponent from '../components/MessageForm';
import CallMadeIcon from '@mui/icons-material/CallMade';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';

export default function Header({mode, setMode}) {
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
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
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
                <IconButton size="large" onClick={toggleDarkMode} >
                    {mode === 'dark' ? <LightModeIcon fontSize='inherit'/> : <NightsStayIcon fontSize='inherit'/>}
                </IconButton>
            </Toolbar>
        </Grid>
    );
}
