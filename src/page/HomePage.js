import React, { useState, useMemo } from "react";
import HeaderContainer from "../containers/Header";
import FooterContainer from '../containers/Footer';
import ProjectBodyContainer from '../containers/ProjectBody';
import AboutBodyContainer from '../containers/AboutBody';
import SocialButtons from '../components/SocialButtons';
import ResumeBodyContainer from '../containers/ResumeBody';
import { getDesignTokens } from "../assets/global/SiteThemes";
import {AppBar, CssBaseline, Grid, useMediaQuery} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const HomePage = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [colorMode, setColorMode] = useState(prefersDarkMode ? 'dark' : 'light');
  const theme = useMemo(() => createTheme(getDesignTokens(colorMode)), [colorMode]);

  return (
    <div className="HomePage">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <AppBar className='HomePage-header' color='transparent' elevation={0} position='sticky' sx={{paddingTop:'1%'}}>
            <HeaderContainer colorMode={colorMode} setColorMode={setColorMode} theme={theme}/>
          </AppBar>
          <Grid container justifyContent='space-between' rowGap={28} sx={{paddingTop: '2%'}}>
            <AboutBodyContainer theme={theme}/>
            <hr width='75%' color={colorMode === 'light' ? theme.palette.secondary.dark : theme.palette.primary.contrastText}/>
            <ProjectBodyContainer/>
            <hr width='75%' color={colorMode === 'light' ? theme.palette.secondary.dark  : theme.palette.primary.contrastText} />
            <ResumeBodyContainer theme={theme}/>
            <AppBar className='SocialButtons' color='transparent' position='sticky' elevation={0} sx={{bottom: '2%'}}>
              <SocialButtons theme={theme}/>
            </AppBar>
          </Grid>
          <FooterContainer colorMode={colorMode} theme={theme}/>
      </ThemeProvider>  
    </div>
  );
}

export default HomePage;
