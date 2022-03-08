import React from 'react';
import ScalesI from '../interfaces/ScalesI.js';


export default class extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onTemperatureChange(
			e.target.value,
			this.props.scale
		);
	}

	render() {
		return (
			<div>
				<legend>enter temperature {ScalesI[this.props.scale]}</legend>
					<input 
						type="text"
						placeholder="enter temperature"
						onChange={this.handleChange}
						value={this.props.temperature}
					/>
			</div>
		);
	}
}