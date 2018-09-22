import React, { Component } from 'react';
import { Container, Button } from 'mdbreact';


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
            that.updateParentState();
        });

    }

    render() {
        return (
            <React.Fragment>
                <Container className="mx-auto px-0 py-5 ">
                    <h1 className="mx-auto my-0 text-center override">ERC</h1>
                    <h4 className="mx-auto my-1 text-center override"> Who are you here to see today?
           </h4>
                    <Button block id="Jacob"   className="mx-auto my-3 col-7 black-text amber lighten-3" onClick={() => { this.pingT("Jacob") }} ><h4 className ="my-auto black-text ">Jacob Jacquez, LCSW</h4></Button>
                    <Button block id="Amanda"   className="mx-auto my-3 col-7  black-text amber lighten-3" onClick={() => { this.pingT("Amanda") }}><h4 className ="my-auto black-text">Amanda Gonzalez, LCSW</h4></Button>
                    <Button block id="Brenda"   className="mx-auto my-3 col-7  black-text amber lighten-3" onClick={() => { this.pingT("Brenda") }}><h4 className ="my-auto black-text">Brenda Dowse, LCSW</h4></Button>
                    <Button block id="Ana"   className="mx-auto my-3 col-7  black-text amber lighten-3" onClick={() => { this.pingT("Ana") }}><h4 className ="my-auto black-text">Ana Borges, LMFT</h4></Button>
                    <Button block id="Myles"   className="mx-auto my-3 col-7  black-text amber lighten-3" onClick={() => { this.pingT("Myles") }}><h4 className ="my-auto black-text">Myles Davis, LCSW</h4></Button>
                </Container>
            </React.Fragment>

        );
    }
}







