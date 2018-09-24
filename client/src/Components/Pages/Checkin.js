import React, { Component } from 'react';
import { Container, Button, Row } from 'mdbreact';
import "./textStyle.css";

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
        const that = this;
        const pingurl = "api/ercphones/ping/" + therapist;
        console.log(pingurl);
        axios.get(pingurl).then(function (results) {
            console.log("results", results.data);
            that.updateParentState("Confirmation");
        });

    }

    render() {
        return (
            <React.Fragment>
                <Container className="mx-auto px-0 py-5 mt-2">
                    <Row className = "my-1">
                    <h2 className="mx-auto mt-4 mb-2 text-center brown-text superSize2">Empowering Relief Counseling</h2>
                    <h1 className="mx-auto my-auto text-center brown-text superSize1"> Who are you here to see today?           </h1>
                    </Row>
                    <Button block id="Jacob" color="brown" className="mx-auto my-3 py-2 my-1 col-11 black-text" onClick={() => { this.pingT("Jacob") }} ><h1 className="my-auto py-1 black-text superSize3 text-capitalize">Jacob Jacquez, LCSW</h1></Button>
                    <Button block id="Amanda" color="brown" className="mx-auto  my-3  py-1 my-1 col-11 black-text" onClick={() => { this.pingT("Amanda") }}><h1 className="my-auto py-1  black-text superSize3 text-capitalize">Amanda Gonzalez, LCSW</h1></Button>
                    <Button block id="Brenda" color="brown" className="mx-auto my-3  py-1 my-1 col-11 black-text" onClick={() => { this.pingT("Brenda") }}><h1 className="my-auto py-1  black-text superSize3 text-capitalize">Brenda Dowse, LCSW</h1></Button>
                    <Button block id="Ana" color="brown" className="mx-auto my-3  py-1 my-1 col-11 black-text" onClick={() => { this.pingT("Ana") }}><h1 className="my-auto py-1  black-text superSize3 text-capitalize">Ana Borges, LMFT</h1></Button>
                    <Button block id="Myles" color="brown" className="mx-auto my-3  py-1 my-1 col-11 black-text" onClick={() => { this.pingT("Myles") }}><h1 className="my-auto py-1  black-text superSize3 text-capitalize">Myles Davis, LCSW</h1></Button>
                </Container>
            </React.Fragment>

        );
    }
}







