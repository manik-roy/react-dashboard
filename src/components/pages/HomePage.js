import React from 'react';
import Box from '@material-ui/core/Box';

import { Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppPerformance from '../homepageitems/cart/AppPerformance';
import ServerOverView from '../homepageitems/cart/ServerOverView';
import RevenuedBreakDown from '../homepageitems/cart/Revenue'
import CartItem from '../homepageitems/cart/CartItem';
import MainChart from '../homepageitems/chart/MainChart'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display:'flex',
  }
}));

const HomePage = () => {

  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
        <Grid item xs={3}>
          <CartItem/>
        </Grid>
        <Grid item xs={3}>
          <AppPerformance/>
        </Grid>
        <Grid item xs={3}>
          <ServerOverView />
        </Grid>
        <Grid item xs={3}>
          <RevenuedBreakDown />
        </Grid>
     </div>
     <Box width={1}> 
          <MainChart/>
      </Box>
     </>
  );
};

export default HomePage;