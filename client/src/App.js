import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, { Component } from 'react';
import { Container, Row, Button } from 'mdbreact';
import './App.css';
const axios = require('axios');

class App extends Component {

  constructor(props) {
    super(props)
    this.pingT = this.pingT.bind(this);
  }

  pingT = (therapist) => {
    const pingurl = "api/ercphones/ping/" + therapist;
    console.log(pingurl);
    axios.get(pingurl).then(results => console.log(results));
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
            <p className="text-center" > Click on your therapists' name below to let them know you have arrived.
       </p>
          </Row>
          <Row className="mx-auto ">
            <Button id="Jacob" color="brown" className="mx-auto" onClick={() => { this.pingT("Jacob") }} >Jacob Jacquez, LCSW</Button>
            <Button id="Amanda" color="brown" className="mx-auto" onClick={() => { this.pingT("Amanda") }}>Amanda Gonzalez, LCSW</Button>
            <Button id="Brenda" color="brown" className="mx-auto" onClick={() => { this.pingT("Brenda") }}>Brenda Dowse, LCSW</Button>
            <Button id="Brenda" color="brown" className="mx-auto" onClick={() => { this.pingT("Ana") }}>Ana Borges, LMFT</Button>
            <Button id="Brenda" color="brown" className="mx-auto" onClick={() => { this.pingT("Myles") }}>Myles Davis, LCSW</Button>

          </Row>
        </Container>
      </React.Fragment>

    );
  }
}

export default App;
