import React from "react";
import { Button} from 'react-bootstrap';

class Game extends React.Component {
  state = {
    testvar:false,
  };
  
  sendCommands = (cmd) => {
    if(cmd =="LED1"){
      console.log("LED1LIGHTUPCMD");
    }
  }

  render() {
    const { testvar } = this.state;

    return (
 
        <div>
          DEMO WIFI DATA XFER
          <div>
          <Button
            type="primary"
            onClick={() => this.sendCommands("LED1")}
          >
            LED1
          </Button>
          </div>
          </div>


    );
  }

}


export default Game;