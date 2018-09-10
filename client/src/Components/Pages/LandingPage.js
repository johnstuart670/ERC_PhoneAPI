import React, { Component } from 'react';
import { Container, Row, Button } from 'mdbreact';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        console.log("props in the landingpage")
        console.log(props)
        console.log("---------")
        this.updateParentState = props.updateParent.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Button block color="brown" onClick={() => { this.updateParentState() }}>
                        Who are you here to see today?
                    </Button>
                </div>
            </React.Fragment>
        )
    }

}


