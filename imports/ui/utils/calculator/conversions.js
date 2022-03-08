const celciusToFahrenheit = (celcius) => {
	return (9/5 * celcius) + 32;
}

const fahrenheitToCelcius = (fahrenheit) => {
	return 5/9 * (fahrenheit - 32);
}

const tryConvert = (temp, convert) => {
	const value = parseFloat(temp);
	if(Number.isNaN(value)) {
		return '';
	}

	const result = convert(temp);
	const rounded = Math.round(result * 1000) / 1000;
	return rounded.toString();
}

export {
	celciusToFahrenheit,
	fahrenheitToCelcius,
	tryConvert
};