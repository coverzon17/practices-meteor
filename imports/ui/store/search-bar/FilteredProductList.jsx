import React from 'react';

import items from '../../../data/raw/products.js';

import SearchBar from './SearchBar.jsx';
import ProductList from './ProductList.jsx';

import { getData } from '../utils/search-fn.js';


export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {search: "", inStock: false};

		this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
		this.handleSearchInputChange = this.handleSearchInputChange.bind(this);

		
	}

	handleCheckboxClick(e) {
		this.setState({inStock: e.target.checked});
	}

	handleSearchInputChange(e) {
		this.setState({search: e});
	}

	render() {
		const inStock = this.state.inStock;
		const result = getData(items, new RegExp((this.state.search.toLowerCase() || "\\w" ) + "+"), inStock);
		return (
			<div>
				<SearchBar 
					inputValue={this.state.search}

					onSearchInputChange={this.handleSearchInputChange}
					onCheckboxClick={this.handleCheckboxClick}
				/>
				<ProductList items={result} />
			</div>
		)
	}
}