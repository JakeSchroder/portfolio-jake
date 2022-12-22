import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid, IconButton} from '@mui/material';
export default function SocialButtons(){
    return (
        <Grid container>
            <Grid item xs={12} display="flex">
                <IconButton size='large' target='_blank' href='https://github.com/JakeSchroder'>
                    <GitHubIcon fontSize='inherit'/>
                </IconButton>
            </Grid>
            <Grid item xs={12} display="flex">
                <IconButton size='large' target='_blank' href='https://www.linkedin.com/in/jakeschroder/'>
                    <LinkedInIcon fontSize='inherit'/>
                </IconButton>
            </Grid>
        </Grid>
    );
}