import React ,{useState}from 'react';
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
    
    let [hh,setHh] =useState(0);
    let [mm,setMM] =useState(0);
    let [ss,setSS] = useState(0);
    const classes = useStyles();
    
     const start =() =>{
     var interval =  setInterval(() => {
        setSS(ss++);
        if(ss==10){
            console.log(ss);
            setMM(mm++)
            ss=0;
        }
        if(mm==4){
            setHh(hh++);
        }
        
        
       }, 1000);
       
    }
   

    const stop =() =>{
        console.log("stopping in func")
    }

    const reset =() =>{
        console.log("reseting in func")
    }
  return (
    <div>

      <div className="timer">{hh}:{mm}:{ss}</div>

      <Button variant="contained" color="primary" className={classes.button} onClick={ () => start()}>
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