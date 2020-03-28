import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import google from '../../google.svg'
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  googleImage: {
    width:'25px',
    paddingRight:'10px',
    paddingTop:'8px'
  },
  googleBtn: {
    border:'none',
    background:'#fff',
    padding:'0 35px'
  },
  welcome: {
    fontSize:'25px'
  },
  orAria:{
    display:'flex',
    '& div':{
      background: 'gray',
      position:'relative',
      width: '44%',
      margin:'60px 0 35px 0',
      height: '1px',
    },
    '& div span':{
      position: 'absolute',
      bottom: '-11px',
      background: '#f2f2f2',
      padding: '0 35px',
    }
  },
  SignUpAria:{
    height:'400px'
  }
}));

const Login = ({fakeAuth}) => {
  const classes = useStyles();

  return (
    <div className={classes.SignUpAria}>
    <h3 className={classes.welcome} >Welcome to Dashboard</h3>
    <Button className={classes.googleBtn} variant="outlined"> <span><img className={classes.googleImage} src={google} alt=""/></span> Sign In with Google</Button>
    <div className={classes.orAria}>
      <div></div>
      <div><span>or</span></div>
      <div></div>
    </div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="email" label="Email"  />
        <br/>
        <TextField id="password" label="Password" />
        <br/>
        <div>
        <Button onClick={fakeAuth} type="submit" style={{float:'left'}} variant="contained" color="primary">
          Login
        </Button>
        <p style={{float:'right', fontSize:'14px', paddingTop:'-25px'}}>Forget password</p>

        </div>
      </form>
    </div>
  );
};

export default Login;
