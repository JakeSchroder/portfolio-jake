import React, { useState, useEffect, useCallback } from "react";
import HeaderContainer from "../containers/Header";
import FooterContainer from '../containers/Footer';
import ProjectBodyContainer from '../containers/ProjectBody';
import AboutBodyContainer from '../containers/AboutBody';
import { Box, Grid, AppBar, IconButton} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SocialButtons from "../components/SocialButtons";

const HomePage = () => {
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div className="HomePage">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <AppBar className='HomePage-header' color='default' elevation={0} position='sticky'>
          <HeaderContainer mode={mode} setMode={setMode}/>
        </AppBar>
        <AboutBodyContainer/>
        <ProjectBodyContainer/>
        <AppBar className='SocialButtons' color='transparent' position='sticky' elevation={0} sx={{bottom: '2%'}}>
          <SocialButtons/>
        </AppBar>
        <FooterContainer/>
      </ThemeProvider>  
    </div>
  );
}

export default HomePage;
