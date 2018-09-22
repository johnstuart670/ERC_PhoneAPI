import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, { Component } from 'react';
import  LandingPage from './Components/Pages/LandingPage';
import  Checkin from './Components/Pages/Checkin';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false
    }
    this.updateParentState = this.updateParentState.bind(this);
  }

  updateParentState = () => {
    const newKey = !(this.state.ready);
    this.setState({ ready: newKey })
  };

  render() {
    const ready = this.state.ready
    console.log("Checking the state!")
    console.log(ready)
    console.log("-----------")
    return (
      <div classname = "black mx-0">
      {!ready ? (<Checkin updateParent = {this.updateParentState} />) : (<LandingPage updateParent = {this.updateParentState} />) }
      </div>
)
  }
}
export default App;
