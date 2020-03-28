import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import Header from '../header/Header';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Badge from '@material-ui/core/Badge';
import Main from '../Main';
import {Link, Route } from 'react-router-dom';
import { Grid, CardContent, Container } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <Route to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}


const MainDrawer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Drawer

        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/customers" >
            <ListItemIcon>
              <BorderAllIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button   >
            <ListItemIcon>
              <NotificationsNoneIcon />
            </ListItemIcon>
            <ListItemText primary="Notification" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FilterNoneIcon />
            </ListItemIcon>
            <ListItemText primary="Charts" />
          </ListItem>
        </List>
        <Divider />
        <List>
          {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}

          <ListItem >
            {/* <ListItemIcon>
              <HomeIcon />
            </ListItemIcon> */}
            <ListItemText primary="Help" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Library" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary="Support" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem >
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button>
            <Badge color="secondary" variant="dot" >
            </Badge>
            <ListItemText style={{paddingLeft:'15px'}} primary="My Recent" />
          </ListItem>
          <ListItem button>
            <Badge color="primary" variant="dot" >
            </Badge>
            <ListItemText style={{paddingLeft:'15px'}} primary="Started" />
          </ListItem>
          <ListItem button>
            <Badge color="secondary" variant="dot" >
            </Badge>
            <ListItemText style={{paddingLeft:'15px'}} primary="Background" />
          </ListItem>

  
        </List>
      </Drawer>
      <Container className={classes.content}>
        <div className={classes.toolbar} />
        <Main/>
      </Container>
    </div>
  );
}

export default MainDrawer;