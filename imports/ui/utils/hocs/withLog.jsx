import React from 'react';

export default (WrappedComponent, messageHandler) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
		}

		componentDidMount() {
			console.log("component wrapped");
			if(!messageHandler === 'function') {
				return;
			}
			
			messageHandler();
		}

		render() {
			return <WrappedComponent />;
		}
	}
}