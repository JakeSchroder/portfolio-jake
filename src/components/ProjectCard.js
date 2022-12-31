import { CardActionArea, Grid, Box, IconButton, CardMedia, Typography, Card, keyframes } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({
  name,
  gitPage,
  link,
  text,
  img
}, index) {

  const scaleDownCenter = keyframes`
    0%{
      transform:scale(1)
    }
    100%{
      transform:scale(.95)
    }`;

  return (
    <Grid key={index} paddingBottom={5}>
       <Card sx={{maxWidth: 400, borderRadius:10, '&:hover':{animation:`${scaleDownCenter} .4s cubic-bezier(.25,.46,.45,.94) both`}}}>
        <CardActionArea >
          <Box position='absolute' width={400} height={290} sx={{opacity: 0, '&:hover': {backgroundColor: 'black', opacity: [0.9, 0.8, 0.7]}}}>
            <IconButton target='_blank' href={link} sx={{top:'1%', right:'12%', position:'absolute'}}>
              <LanguageIcon sx={{color:'white'}}/>
            </IconButton>
            <IconButton target='_blank' href={gitPage} sx={{top:'1%', right:'3%', position:'absolute'}}>
              <GitHubIcon sx={{color:'white'}}/>
            </IconButton>
            <Typography gutterBottom color='white' variant="h5" component="div" bottom='15%' left='5%' position='absolute'>
              <b>{name}</b>
            </Typography>
            <Typography variant="body2" color="white" bottom='10%' left='5%' position='absolute'>
              {text}
            </Typography>
          </Box>
          <CardMedia
            component="img"
            width="300"     
            image={img}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
}