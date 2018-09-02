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

  pingT (therapist) {
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

        <Container className="mx-auto ">
          <Row className="mx-auto ">
            <p className="text-center" > Click on your therapists' name below to let them know you have arrived.
       </p>
          </Row>
          <Row className="mx-auto ">
            <Button id="Jacob" className="mx-auto" onClick={() => {this.pingT("Jacob")}} >Jacob Jacquez</Button>
            <Button id="Amanda" className="mx-auto" onClick={() => {this.pingT("Amanda")}}>Amanda Gonzalez</Button>
            <Button id="Brenda" className="mx-auto" onClick={() => {this.pingT("Brenda")}}>Brenda</Button>
          </Row>
        </Container>
      </React.Fragment>

    );
  }
}

export default App;
