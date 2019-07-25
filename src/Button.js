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
    var interval ;
     const start =() =>{
     interval=  setInterval(() => {
        
            setSS(ss++);
            if(ss>59){
                setMM(++mm)
                ss=0;
            }
            if(mm>59){
            setHh(++hh)
            mm=0;
        }
    }, 100);
    localStorage.setItem("interval_id",interval);
    }
   

    const stop =() =>{
        clearInterval(localStorage.getItem("interval_id"))

    }

    const reset =() =>{
        
        setSS(0);
        setMM(0);
        setHh(0);

    }
  return (
    <div>

      <div className="timer">{ (hh<10) ?'0'+hh:hh}:{ (mm<10)?'0'+mm:mm}:{(ss<10)?'0'+ss:ss}</div>

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