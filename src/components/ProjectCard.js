import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box, Paper } from '@mui/material';

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
        <CardActionArea target='_blank' href={gitPage}>
          <Box position='absolute' width={400} height={280} sx={{opacity: 0, '&:hover': {
                                                                                    backgroundColor: 'black',
                                                                                    opacity: [0.9, 0.8, 0.7],
                                                                                  }}}
          >
            <Typography gutterBottom color='white' variant="h5" component="div" bottom='15%' left='5%' position='absolute'>
              {name}
            </Typography>
            <Typography variant="body2" color="white" bottom='10%' left='5%' position='absolute'>
              {text}
            </Typography>
          </Box>
          <CardMedia
            component="img"
            width="400"        
            image="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12153852/American-Eskimo-Dog-standing-in-the-grass-in-bright-sunlight-400x267.jpg"
            alt={name}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
}