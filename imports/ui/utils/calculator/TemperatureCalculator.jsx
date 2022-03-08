import React from 'react';
import { celciusToFahrenheit, fahrenheitToCelcius, tryConvert } from './conversions.js';
import ScalesI from '../interfaces/ScalesI.js';

// React components
import BoilingVerdict from './BoilingVerdict.jsx';
import TemperatureInput from './TemperatureInput.jsx';


export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {temperature: "", scale: ""};

		this.handleCelciusTemperatureChange = this.handleCelciusTemperatureChange.bind(this);
		this.handleFahrenheitTemperatureChange = this.handleFahrenheitTemperatureChange.bind(this);	
	}

	handleCelciusTemperatureChange(val, scale) {
		this.setState({temperature: val, scale: scale});
	}

	handleFahrenheitTemperatureChange(val, scale) {
		this.setState({temperature: val, scale: scale});
	}

	render() {
		const temp = this.state.temperature;
		const celcius = this.state.scale === "c" ? temp : tryConvert(temp, fahrenheitToCelcius);
		const fahrenheit = this.state.scale === "f" ? temp : tryConvert(temp, celciusToFahrenheit);

		return (
			<fieldset>
				<TemperatureInput 
					onTemperatureChange={this.handleCelciusTemperatureChange}
					temperature={celcius} scale="c" />
				<TemperatureInput
					onTemperatureChange={this.handleFahrenheitTemperatureChange}
					temperature={fahrenheit} scale="f" />
				{temp && <BoilingVerdict temperature={celcius}/>}
			</fieldset>
		);
	}
}

// F = (9/5 x C) + 32