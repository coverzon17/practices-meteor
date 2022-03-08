import React from 'react';

//React Components
import ProductItemsCategory from './ProductItemsCategory.jsx';
import ProductItem from './ProductItem.jsx';


export default props => {
	
	const items = props.items;
	const categories = [];
	const categorizedData = [];

	items.forEach(item => {
		if(!categories.includes(item.category)) {
			categories.push(item.category);
		}
	});

	categories.forEach((category, categoryIndex) => {
		categorizedData.push({category: category, items: []});
		items.forEach(item => {
			if(category === item.category) {
				const items = categorizedData[categoryIndex].items;
				if(Array.isArray(items)) {
					items.push(item);
				}
			}
		});
		
	});


	return (
		<table>
			<thead>
				{categorizedData.length ? 
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
					: ""
				}
			</thead>
				{categorizedData.map( data => 
				<tbody>
					<ProductItemsCategory key={data.category} category={data.category} />
					{data.items.map( item => <ProductItem item={item} key={item.name} />)}

					
				</tbody>)}

				{/*{props.items.map( (item) => {
					return (
						<tr>
							<th colspan="2">{item.category}</th>
						</tr>
						<tr>
							<td>{props.items.name}</td>
							<td>{props.items.price}</td>
						</tr>
					)
				})}*/}
			
		</table>
	);
}