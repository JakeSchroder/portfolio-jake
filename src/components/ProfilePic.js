import { Box, Grid, keyframes } from "@mui/material"

export default function ProfilePic({theme}){
    const blob= keyframes `
    10% { border-radius: 33% 67% 50% 50% / 43% 39% 61% 57%; }
      
    20% { border-radius: 51% 49% 31% 69% / 65% 39% 61% 35%; }
      
    30% { border-radius: 51% 49% 56% 44% / 45% 39% 61% 55%; }
      
    40% { border-radius: 66% 34% 33% 67% / 48% 71% 39% 52%; }
      
    50% { border-radius: 46% 54% 33% 67% / 48% 30% 70% 52%; }
      
    60% { border-radius: 46% 54% 56% 44% / 48% 30% 70% 52%; }
      
    70% { border-radius: 46% 54% 56% 44% / 65% 53% 47% 35%; }
      
    80% { border-radius: 67% 33% 56% 44% / 37% 53% 47% 63%; }
      
    90% { border-radius: 46% 54% 32% 68% / 37% 53% 47% 63%; }` 
    const blobAnim = `${blob} 60s linear infinite`;

    return(
        <Grid item xs={5} display="flex" justifyContent="center" alignItems="center">
            <Box display='flex' justifyContent='center' alignItems="center" width={500} height={600} sx={{backgroundColor: theme.palette.secondary.light, animation: blobAnim, borderRadius: '50%' }}>
                <Box display='flex' position='relative' justifyContent='center' alignItems="center" width={600} height={450} left={30} top={20} sx={{overflow:'hidden' ,backgroundColor: theme.palette.primary.contrastText, animation: blobAnim, borderRadius: '50%' }}>
                    <img alt="Jake Schroder" width={500} height={500} src="/images/jake-profile.png"/>
                </Box>
            </Box>
        </Grid>

    )
}