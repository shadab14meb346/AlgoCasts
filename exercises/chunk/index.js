// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//my first solution
function chunk1(array, size) {
	const chunkedArray = [];
	const numbersOfIterations = Math.ceil(array.length / size);
	let sliceIndex = 0;
	for (let i = 0; i < numbersOfIterations; i++) {
		const chunk = array.slice(sliceIndex, sliceIndex + size);
		chunkedArray.push(chunk);
		sliceIndex = sliceIndex + size;
	}
	return chunkedArray;
}

function chunk(array, size) {
	const chunkedArray = [];
	let sliceIndex = 0;
	while (sliceIndex < array.length) {
		const chunk = array.slice(sliceIndex, sliceIndex + size);
		chunkedArray.push(chunk);
		sliceIndex = sliceIndex + size;
	}
	return chunkedArray;
}
//without using slice method
function chunk2(array, size) {
	const chunkedArray = [];
	let chunk = [];
	for (const element of array) {
		//if chunk length is less than size
		if (chunk.length < size) {
			chunk.push(element);
		}
		if (chunk.length === size || array.indexOf(element) === array.length - 1) {
			chunkedArray.push(chunk);
			chunk = [];
		}
	}
	return chunkedArray;
}

//without variable mutation
function chunk3(array, size) {
	const chunked = [];
	for (const element of array) {
		const last = chunked[chunked.length - 1];
		if (!last || last.length === size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}
	}
	return chunked;
}

module.exports = chunk;
