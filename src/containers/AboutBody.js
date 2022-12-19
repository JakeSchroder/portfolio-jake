import { Grid, Button, Typography} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CallMadeIcon from '@mui/icons-material/CallMade';

export default function AboutBody() {
    return (
            <Grid container elevation={0} sx={{paddingTop:'8%', paddingBottom:'20%'}}>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" sx={{paddingBottom:5}}>
                    <Avatar xs={12} alt="Jake Schroder" sx={{alignItems:'center', width:200, height:200}} src="https://media-exp1.licdn.com/dms/image/C4E03AQHZEsmrh6UFzA/profile-displayphoto-shrink_800_800/0/1525228018391?e=1675900800&v=beta&t=iNC2sXrGdInf5Ucm8dgALOitU6uH7xiM3Yw3-iXUBp8"/>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                    <Typography variant='h4' sx={{fontFamily:'solano-gothic-pro-mvb, sans-serif', fontWeight:'500', fontStyle: 'normal'}}>Hi I'm Jake</Typography>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                    <Typography variant='h2' sx={{fontFamily:'solano-gothic-pro-mvb, sans-serif', fontWeight:'500', fontStyle: 'normal'}}>Building digital products, brands, and experience</Typography>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                    <Typography variant='h6' sx={{fontFamily:'solano-gothic-pro-mvb, sans-serif', fontWeight:'500', fontStyle: 'normal'}}>A Frontend Developer and Visual Designer with experience in web design, brand identity and product design.</Typography>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                    <Button variant="contained" color="secondary" sx={{borderRadius: 28}} endIcon={<CallMadeIcon/>}>Resume</Button>
                </Grid>
            </Grid>
    );
  }