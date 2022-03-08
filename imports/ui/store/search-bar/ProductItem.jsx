import React from 'react';

export default props => {
	if(props && props.item) {
		return (
			<tr>
				<td>{props.item.name}</td>
				<td>{props.item.price}</td>
			</tr>
		);
	}

	return null;
}