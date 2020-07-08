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
function chunk(array, size) {
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

module.exports = chunk;
