import React, { Component } from 'react';
import { Container, Row, Button } from 'mdbreact';
const axios = require('axios');

export default class Checkin extends Component {

    constructor(props) {
        super(props)
        console.log("Props in the Checkin Page");
        console.log(props);
        this.pingT = this.pingT.bind(this);
        this.updateParentState = props.updateParent.bind(this);
      }
    
      pingT = (therapist) => {
        const pingurl = "api/ercphones/ping/" + therapist;
        console.log(pingurl);
        axios.get(pingurl).then(results => this.updateParentState());
      }
    
      render() {
        return (
          <React.Fragment>
            <div className="App">
              <h1 className="App-title">ERC Phone Server</h1>
              <p className="App-intro">
                Testing the server capabilities of Node and Heroku to run a "Your Client is here" notification        </p>
            </div>
    
            <Container className="mx-auto black">
              <Row className="mx-auto ">
                <p className="mx-auto text-center white-text" > Click on your therapists' name below to let them know you have arrived.
           </p>
              </Row>
              <Row className="mx-auto ">
                <Button id="Jacob" color="brown" className="mx-auto col-5" onClick={() => { this.pingT("Jacob") }} >Jacob Jacquez, LCSW</Button>
                <Button id="Amanda" color="brown" className="mx-auto col-5" onClick={() => { this.pingT("Amanda") }}>Amanda Gonzalez, LCSW</Button>
              </Row>
              <Row className="mx-auto ">
                <Button id="Brenda" color="brown" className="mx-auto col-5" onClick={() => { this.pingT("Brenda") }}>Brenda Dowse, LCSW</Button>
                <Button id="Brenda" color="brown" className="mx-auto col-5" onClick={() => { this.pingT("Ana") }}>Ana Borges, LMFT</Button>
              </Row>
              <Row className="mx-auto ">
                <Button id="Brenda" color="brown" className="mx-auto col-5" onClick={() => { this.pingT("Myles") }}>Myles Davis, LCSW</Button>
              </Row>
            </Container>
          </React.Fragment>

    );
  }
}







