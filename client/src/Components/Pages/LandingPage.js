import React, { Component } from 'react';
import { Container, Button } from 'mdbreact';
import "./textStyle.css"

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
        setTimeout(function () { { that.updateParentState() } }, 45000);
    }
    render() {
        return (
            <React.Fragment>
                <Container className="mx-auto">
                    <p brown className="text-center pt-4 mx-auto brown-text SuperText">Thank you.</p>
                    <p brown className="text-center pt-0 mx-auto brown SuperText">Please have a seat.</p>
                    <p brown className="text-center pt-1 mx-auto brown-text lineAdjust SuperText ">Your counselor has been notified of your arrival.</p>
                </Container>
                <Container className = "btnPosition pt-5">
                    <Button block color="brown bottomBtn" onClick={() => { this.updateParentState() }}>
                        <h3 className="my-auto black-text">Go back to the Checkin Page</h3>
                    </Button>
                </Container>
            </React.Fragment>
        )
    }

}


