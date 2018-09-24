import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, { Component } from 'react';
import LandingPage from './Components/Pages/LandingPage';
import ConfirmationPage from './Components/Pages/ConfirmationPage';
import Checkin from './Components/Pages/Checkin';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "Confirmation"
    }
    this.updateParentPageState = this.updateParentPageState.bind(this);
  }

  updateParentPageState = (updateValue) => {
    this.setState({ page: updateValue })
  };

  render() {
    const page = this.state.page;
    console.log("Checking the page state!");
    console.log(page);
    console.log("-----------");
    //routing for the page (should probably update with react router in future release with more complex app)
    if (page === "Confirmation") { return (<ConfirmationPage updateParent={this.updateParentPageState} />) }
    //
    if (page === "Checkin") { return (<Checkin updateParent={this.updateParentPageState} />) }
    //default option is to render the landing page
    return (<LandingPage updateParent={this.updateParentPageState} />)
  };
}
  export default App;
