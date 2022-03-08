
const getData = (source, pattern, inStock) => {
	
	if(!Array.isArray(source))
		return;
	
	return source.filter( data => {
		const result = searchObject(data, pattern);
		if(inStock) {
			if(data.stocked) {
				return result;	
			}
			return false;
		}

		return result;
	});
}

const searchObject = (data, pattern) => {
	let pass = false;
	for (const property of Object.keys(data)) {
		if(property === "stocked") {
			continue;
		}

		if(pattern.test(data[property].toString().toLowerCase())) {
			pass = true;
			break;
		}
	}

	return pass;
}

export { getData };


