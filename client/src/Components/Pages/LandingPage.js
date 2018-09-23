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
    }
    render() {
        return (
            <React.Fragment>
                put in the landing page info here
            </React.Fragment>
        )
    }

}


