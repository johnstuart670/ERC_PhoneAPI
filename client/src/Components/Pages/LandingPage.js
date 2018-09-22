import React, { Component } from 'react';
import { Container, Button } from 'mdbreact';
import './textStyle.css';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        console.log("props in the landingpage")
        console.log(props)
        console.log("---------")
        this.updateParentState = props.updateParent.bind(this);
    }
    componentDidMount() {
        const that = this;
        setTimeout(function () { that.updateParentState() } , 45000);
    }
    render() {
        return (
            <React.Fragment>
                <Container className="mx-auto">
                    <p  className="text-center pt-4 mx-auto SuperText amber-text ">Thank you.</p>
                    <p  className="text-center pt-0 mx-auto amber lighten-3 SuperText">Please have a seat.</p>
                    <p  className="text-center pt-1 mx-auto lineAdjust SuperText amber-text">Your counselor has been notified of your arrival.</p>
                </Container>
                <Container className = "btnPosition pt-5">
                    <Button block className="amber lighten-3 bottomBtn" onClick={() => { this.updateParentState() }}>
                        <h3 className="my-auto black-text">Go back to the Checkin Page</h3>
                    </Button>
                </Container>
            </React.Fragment>
        )
    }

}

