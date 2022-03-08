import React from 'react';

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
	}

	handleSearchInputChange(e) {
		this.props.onSearchInputChange(e.target.value);
	}


	render() {
		return (
			<form>
				<input type="text" onChange={this.handleSearchInputChange} value={this.props.inputValue}/>
				<p>
					<input type="checkbox" onClick={this.props.onCheckboxClick}/>
					 Only show products in stock
				</p>
			</form>
		);
	}
}