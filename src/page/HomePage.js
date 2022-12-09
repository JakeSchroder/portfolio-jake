import * as React from 'react';
import PageHeaderContainer from "../containers/PageHeader";
import PageFooterContainer from '../containers/PageFooter';
import ProjectPageBodyContainer from '../containers/ProjectPageBody';
import AboutPageBodyContainer from '../containers/AboutPageBody';
import { Box, Grid, AppBar} from '@mui/material';

const HomePage = () => {
  return (
    <div className="HomePage">  
        <AppBar className='HomePage-header' color="transparent" elevation={0} position='absolute'>
            <PageHeaderContainer/>
        </AppBar>
        <AboutPageBodyContainer/>
        <PageFooterContainer/>
    </div>
  );
}

export default HomePage;
