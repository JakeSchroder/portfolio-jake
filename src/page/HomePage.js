import * as React from 'react';
import PageHeaderContainer from "../containers/PageHeader";
import PageFooterContainer from '../containers/PageFooter';
import PageBodyContainer from '../containers/PageBody';
import { AppBar } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box
 } from '@mui/material';
const HomePage = () => {
  return (
    <div className="HomePage">  
        <AppBar className='HomePage-header' color="transparent" elevation={0} position='absolute'>
            <PageHeaderContainer/>
        </AppBar>
        <PageBodyContainer/>
        <PageFooterContainer/>
    </div>
  );
}

export default HomePage;
