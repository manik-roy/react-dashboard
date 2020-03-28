import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const BorderLinearProgress = withStyles({
  root: {
    height: 5,
    backgroundColor: lighten('#536dfe',0.1),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ffeb3b',
  },
})(LinearProgress);





const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(0),
  },
}));

export default function LinearProgressBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
     
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={props.value}
      />
      
    </div>
  );
}
