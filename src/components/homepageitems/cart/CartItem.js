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
      fontSize:'18px',
      fontWeight:'500'
    }
    }

}));

export default function CardItem() {
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
        title="Visits Today"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          12,678 <ShowChartIcon/>
        </Typography>
      </CardContent>
      <CardActions className={classes.cartFooter}>
        <Typography variant="body2" color="textSecondary" component="p">
         Registration <br/>
         <span>860</span>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Sign Out <br/>
         <span>860</span>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Rate <br/>
         <span>860</span>
        </Typography>
      </CardActions>
    </Card>
  );
}
