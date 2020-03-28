import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ChartsItem from './PichartItem';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
    margin:'0 2px'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cartFooter: {
    '& p':{
      width:'30%',
      float:'left',
      paddingLeft:'5px'
    }

  },
  cardHeader: {
    '& div span' :{
      fontSize:'16px',
      fontWeight:'500',
      marginBottom:'-12px'
    }
    }

}));

export default function RevenuedBreakDown() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Revenue Breakdown"
      />
      <CardContent>
      <div style={{display:'flex'}}>
        <ChartsItem/>
        <div style={{paddingLeft:'9px'}}>
          <p style={{margin:'2px 0'}}> <Badge color="primary" variant="dot" /> <span style={{paddingLeft:'5px'}}> Group A -400 </span> </p>
          <p style={{margin:'2px 0'}}> <Badge color="secondary" variant="dot" /> <span style={{paddingLeft:'5px'}}> Group B -300 </span> </p>
          <p style={{margin:'2px 0'}}> <Badge color="primary" variant="dot" /> <span style={{paddingLeft:'5px'}}> Group C -200 </span> </p>
          <p style={{margin:'2px 0'}}> <Badge color="secondary" variant="dot" /> <span style={{paddingLeft:'5px'}}> Group D -100 </span> </p>

        </div>
      </div>
    
      </CardContent>
    </Card>
  );
}


// /RevenuedBreakDown