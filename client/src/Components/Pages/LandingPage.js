import React, { Component } from 'react';
import { Container, Button, Row } from 'mdbreact';
import './textStyle.css';

let ERC_BG = {
	backgroundImage: `url(.images/erc_images/powerlogo2.jpg)`,
	height: "100%",
};

let ERC_Container = {
	height: "100px"
};

export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		console.log("props in the landingpage")
		console.log(props)
		console.log("---------")
		this.updateParentPageState = props.updateParent.bind(this);
	}

	render() {
		return (
			<React.Fragment>
				<Container style = {ERC_Container}>
					<div style={ERC_BG }></div>
					<img src = "url(.images/erc_images/powerlogo2.jpg)" alt = "Empowering Relief Checkin"></img>
					<Row>
						<Button block color="brown" className="black-text" onClick={() => { this.updateParentPageState("Checkin") }}>Click here to Check In</Button>
					</Row>
				</Container>
			</React.Fragment>
		)
	}

}


