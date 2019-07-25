import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import ContainedButtons from './Button';
import './App.css';
 
function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        By Kirandeep Kaur
      </Link>
      {' team.'}
    </Typography>
  );
}

class App extends React.Component {

  constructor(){
    super();
    this.state ={
        hh:0,
        mm:0,
        ss:0
    }
  }
  
 
  render(){
  
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Chronometer
        </Typography>
        <ProTip />
        <div className="timer">{this.state.hh}:{this.state.mm}:{this.state.ss}</div>

        <ContainedButtons timer={this.state} id="buttons"/>
      </Box>
    </Container>
  );
  }
}
export default App;