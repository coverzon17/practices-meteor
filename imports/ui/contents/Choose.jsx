import React from 'react';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ["mango"]};


		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleClick(e) {
		this.setState((state) => {
			let toDelete = false, indexToDelete;

			state.value.forEach( (v, i) => {
				if(v === e.target.value) {
					toDelete = true;
					indexToDelete = i;
				} 
			})

			if(toDelete) {
				const newArr = [...state.value];
				newArr.splice(indexToDelete, 1);
				return {
					value: [...newArr]
				}
			}

			return { value: [...state.value, e.target.value]}
		});
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		const options = ["apple", "mango", "banana"];
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>flavor</label>
					<select multiple={true} value={this.state.value} onClick={this.handleClick}>
						{ options.map( (fruit) => 
							<option key={fruit} 
								value={fruit}>
									{fruit}
							</option>)
						}
					</select>
				</form>
			</div>
		);
	}
}