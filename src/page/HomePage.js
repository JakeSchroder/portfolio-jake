import React, { useState, useEffect, useCallback } from "react";
import HeaderContainer from "../containers/Header";
import FooterContainer from '../containers/Footer';
import ProjectBodyContainer from '../containers/ProjectBody';
import AboutBodyContainer from '../containers/AboutBody';
import SocialButtons from '../components/SocialButtons';
import ResumeBodyContainer from '../containers/ResumeBody';
import {AppBar, CssBaseline, Grid} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const HomePage = () => {
  const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div className="HomePage">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
          <AppBar className='HomePage-header' color='inherit' elevation={0} position='sticky' sx={{paddingTop:'1%'}}>
            <HeaderContainer mode={mode} setMode={setMode}/>
          </AppBar>
          <Grid container justifyContent='space-between' rowGap={28}>
            <AboutBodyContainer mode={mode}/>
            <hr width='75%' />
            <ProjectBodyContainer/>
            <hr width='75%' />
            <ResumeBodyContainer/>
            <AppBar className='SocialButtons' color='transparent' position='sticky' elevation={0} sx={{bottom: '2%'}}>
              <SocialButtons/>
            </AppBar>
          </Grid>
          <FooterContainer/>
      </ThemeProvider>  
    </div>
  );
}

export default HomePage;
