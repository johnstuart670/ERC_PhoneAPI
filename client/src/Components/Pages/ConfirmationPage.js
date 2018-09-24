import React, { Component } from 'react';
import { Container, Button } from 'mdbreact';
import './textStyle.css';

let btnPositionStyle = {
    height: "350px"
}

export default class ConfirmationPage extends Component {
    constructor(props) {
        super(props);
        console.log("props in the landingpage")
        console.log(props)
        console.log("---------")
        this.updateParentPageState = props.updateParent.bind(this);
    }
    // componentDidMount() {
    //     const that = this;
    //     setTimeout(function () { that.updateParentPageState("Landing") } , 45000);
    // }
    render() {
        return (
            <React.Fragment>
                <Container className="mx-auto my-5">
                    <p  className="text-center pt-4 my-3 mx-auto superSize5 brown-text ">Thank you.</p>
                    <p  className="text-center pt-0 my-3 mx-auto brown SuperText">Please have a seat.</p>
                    <p  className="text-center pt-1 my-3 mx-auto superSize5 brown-text">Your counselor has been notified of your arrival.</p>
                    <div style = {btnPositionStyle}></div>
                </Container>
                <Container className = "btnPosition my-5" style= {btnPositionStyle} >
                    <Button block color = "brown" className="mx-auto my-5 col-11  black-text bottomBtn" onClick={() => { this.updateParentPageState("Landing") }}>
                        <h3 onClick={() => { this.pingT("Myles") }} className="  black-text superSize3 text-capitalize">Go back to the Home Page</h3>
                    </Button>
                </Container>
            </React.Fragment>
        )
    }

}


