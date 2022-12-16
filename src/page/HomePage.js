import React, { useState, useEffect, useCallback } from "react";
import HeaderContainer from "../containers/Header";
import FooterContainer from '../containers/Footer';
import ProjectBodyContainer from '../containers/ProjectBody';
import AboutBodyContainer from '../containers/AboutBody';
import { Box, Grid, AppBar} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



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
        <AppBar className='HomePage-header' color="transparent" elevation={0} position='absolute'>
            <HeaderContainer mode={mode} setMode={setMode}/>
        </AppBar>
        <AboutBodyContainer/>
        <ProjectBodyContainer/>
        <FooterContainer/>
      </ThemeProvider>  
    </div>
  );
}

export default HomePage;
