import React from 'react';

export default React.forwardRef((props, ref) => {
	return (
		<div className="text-area" onClick={props.onCLick} ref={ref}>
			<p>{props.text}</p>
		</div>
	);
});