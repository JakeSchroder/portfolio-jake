import {Grid, keyframes, Typography, Button} from "@mui/material"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { ResumePDF } from '../assets/global/FileVariables';

export default function AboutBodyText({theme}){
    const textColor = theme.palette.mode === 'light' ? theme.palette.secondary.light : theme.palette.primary.textColor
    const textShadowColor = theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.dark
    const textShadowPopBR = keyframes `
    0% {
        text-shadow: 0 0 ${textShadowColor}, 0 0 ${textShadowColor}, 0 0 ${textShadowColor}, 0 0 ${textShadowColor}, 0 0 ${textShadowColor}, 0 0 ${textShadowColor}, 0 0 ${textShadowColor}, 0 0 ${textShadowColor};
        -webkit-transform: translateX(0) translateY(0);
                transform: translateX(0) translateY(0);
    }
    100% {
        text-shadow: 1px 1px ${textShadowColor}, 2px 2px ${textShadowColor}, 3px 3px ${textShadowColor}, 4px 4px ${textShadowColor}, 5px 5px ${textShadowColor}, 6px 6px ${textShadowColor}, 7px 7px ${textShadowColor}, 8px 8px ${textShadowColor};
        -webkit-transform: translateX(-8px) translateY(-8px);
                transform: translateX(-8px) translateY(-8px);
    }`
    const textShadowPopBRAnime = `${textShadowPopBR} 0.6s both`

    return(
        <Grid item xs={5} display="flex" justifyContent="center" position='relative' direction='column' sx={{top:30}}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Typography color={textColor} variant='h3'  align='center' sx={{fontFamily:'solano-gothic-pro-mvb, sans-serif', fontWeight:'500', fontStyle: 'normal', animation: textShadowPopBRAnime}}>
                    <b>Hi, I'm Jake!</b>
                </Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Typography color={textColor} variant='h2' align='center' sx={{fontFamily:'solano-gothic-pro-mvb, sans-serif', fontWeight:'500', fontStyle: 'normal', animation: textShadowPopBRAnime}}>
                    <b>Building digital products, brands, and experience</b>
                </Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Typography color={textColor} variant='h6'  align='center' sx={{fontFamily:'solano-gothic-pro-mvb, sans-serif', fontWeight:'500', fontStyle: 'normal', animation: textShadowPopBRAnime}}>
                    <b>A technically experienced, creative, and self-driven Fullstack Developer and Visual Designer with expertise in Frontend Development.</b>
                </Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Button href={ResumePDF} download={true} variant='text' endIcon={<ArrowCircleDownIcon />} size='large' sx={{color: theme.palette.primary.contrastText}}>
                    Resume
                </Button>
            </Grid>
        </Grid>
    )
}