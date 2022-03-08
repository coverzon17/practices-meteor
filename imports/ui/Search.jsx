import React from 'react';
import Display from './Display.jsx';
import Clock from './Clock.jsx';
import Choose from './contents/Choose.jsx';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ""};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);

		this.componentRef = React.createRef();
	}

	handleChange(e) {
		this.setState({value: e.target.value});
		if(this.state.value === "clear") {
			console.clear();
		}
	}

	handleClick() {
		console.log("got clicked");
		console.log(this.componentRef.current);
	}

	// componentDidMount() {
	// 	this.timerID = setInterval(() => {
	// 		console.log(this.state.value);
	// 	}, 1000);	
	// }

	// componentWillUnMount() {
	// 	clearTimeout(this.timerID);
	// }

	render() {
		const numbers = [1 ,10, 5, 3, 8, 2];

		const elms = numbers.map( (number) => <li key={number}>{number*5}</li>);
		return (
			<div className="search-section">
				<Display text={this.state.value} onCLick={this.handleClick} ref={this.componentRef}/>

				<input
					type="text"
					placeholder="enter text here"
					name="search"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				{this.state.value === "time" && <Clock />}
				<ul>{elms}</ul>
				<Choose />
			</div>
		);
	}
}

export default Search;