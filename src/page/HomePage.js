import React, { useState, useEffect, useCallback } from "react";
import PageHeaderContainer from "../containers/PageHeader";
import PageFooterContainer from '../containers/PageFooter';
import ProjectPageBodyContainer from '../containers/ProjectPageBody';
import AboutPageBodyContainer from '../containers/AboutPageBody';
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
            <PageHeaderContainer mode={mode} setMode={setMode}/>
        </AppBar>
        <AboutPageBodyContainer/>
        <PageFooterContainer/>
      </ThemeProvider>  
    </div>
  );
}

export default HomePage;
