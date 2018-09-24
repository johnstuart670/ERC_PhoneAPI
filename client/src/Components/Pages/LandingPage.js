import React, { Component } from 'react';
import { Container, Button, Row } from 'mdbreact';
import './textStyle.css';

let imgStyle = {
	width: "auto",
	height: "400px"
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
				<Container className = "mx-auto">
					<Row className = "pt-5 mx-auto">
						<h1 className = "brown-text mx-auto my-auto superSize4">Welcome</h1>
					</Row>
					<Row>
					<img style = {imgStyle} className = "mx-auto py-1" src = "./images/erc_images/powerlogo2.jpg" alt = "ERC Checkin Page Empowering Relief Counseling Checkin" />
					</Row>
				<Button block color="brown" className = "mx-auto py-2 my-5 col-8 black-text" onClick={() => { this.updateParentPageState("Checkin") }}>
					<h3 className="text-capitalize black-text my-auto py-1 black-text superSize3">
					Click here to Check In
					</h3>
					</Button>
				</Container>
			</React.Fragment>
		)
	}

}


