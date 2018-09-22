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
        const that = this;
        const pingurl = "api/ercphones/ping/" + therapist;
        console.log(pingurl);
        axios.get(pingurl).then(function (results) {
            console.log("results", results.data);
            {that.updateParentState()};
        });

    }

    render() {
        return (
            <React.Fragment>
                <Container className="mx-auto px-0 black py-5">
                    <h1 className="mx-auto my-0 text-center brown-text">ERC</h1>
                    <h4 className="mx-auto my-1 text-center brown-text"> Who are you here to see today?
           </h4>
                    <Button block id="Jacob" color="brown" className="mx-auto my-3 col-7" onClick={() => { this.pingT("Jacob") }} ><h4 className ="my-auto">Jacob Jacquez, LCSW</h4></Button>
                    <Button block id="Amanda" color="brown" className="mx-auto my-3 col-7" onClick={() => { this.pingT("Amanda") }}><h4 className ="my-auto">Amanda Gonzalez, LCSW</h4></Button>
                    <Button block id="Brenda" color="brown" className="mx-auto my-3 col-7" onClick={() => { this.pingT("Brenda") }}><h4 className ="my-auto">Brenda Dowse, LCSW</h4></Button>
                    <Button block id="Ana" color="brown" className="mx-auto my-3 col-7" onClick={() => { this.pingT("Ana") }}><h4 className ="my-auto">Ana Borges, LMFT</h4></Button>
                    <Button block id="Myles" color="brown" className="mx-auto my-3 col-7" onClick={() => { this.pingT("Myles") }}><h4 className ="my-auto">Myles Davis, LCSW</h4></Button>

                </Container>
            </React.Fragment>

        );
    }
}







