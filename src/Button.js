import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();
   const start =(timer) =>{
       setInterval(() => {
          timer.ss = timer.ss+1;
          
       }, 1000);
        console.log(timer.ss)
    }

    const stop =() =>{
        console.log("stopping in func")
    }

    const reset =() =>{
        console.log("reseting in func")
    }
  return (
    <div>
        
      <Button variant="contained" color="primary" className={classes.button} onClick={ () => start(props.timer)}>
        Start
      </Button>
         
      <Button variant="contained" color="primary" className={classes.button} onClick={ () => stop()}>
        Stop
      </Button>
         
      <Button variant="contained" color="primary" className={classes.button} onClick={ () => reset()}>
        Reset
      </Button>
     
  
    </div>
  );
}