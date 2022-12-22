import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box, Paper, IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({
  name,
  gitPage,
  link,
  text,
  img
}, index) {


  return (
    <Grid key={index} paddingBottom={5}>
       <Card sx={{ maxWidth: 400 }} elevation={2} >
        <CardActionArea>
          <Box position='absolute' width={400} height={290} sx={{opacity: 0, '&:hover': {backgroundColor: 'black', opacity: [0.9, 0.8, 0.7]}}}>
            <IconButton target='_blank' href={link} sx={{top:'1%', right:'12%', position:'absolute'}}>
              <LanguageIcon/>
            </IconButton>
            <IconButton target='_blank' href={gitPage} sx={{top:'1%', right:'3%', position:'absolute'}}>
              <GitHubIcon/>
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
            width="400"        
            image={img}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
}