import React from 'react';

export default function (props) {
	console.log(props.temperature);
	if(props.temperature > 100) {
		return <p>the water would boil.</p>;
	}

	return <p>the water wouldn't boil.</p>
}