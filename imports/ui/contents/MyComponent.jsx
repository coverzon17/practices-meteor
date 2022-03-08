import React, { createRef } from 'react';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = createRef();

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.myRef.current.innerHTML = parseInt((Math.random() * 100)).toString();
	}

	render() {
		return (
			<div className="main-content" ref={this.myRef} onClick={this.handleClick}>nothing here.</div>
		);
	}
}