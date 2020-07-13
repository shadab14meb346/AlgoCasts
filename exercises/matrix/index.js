// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function create2dArray(n) {
	const resultArray = [];
	for (let i = 0; i < n; i++) {
		resultArray.push([]);
	}
	return resultArray;
}
function* range(from = 1, to) {
	while (from <= to) {
		yield from++;
	}
}

function matrix(n) {
	let result2dArray = create2dArray(n);
	let endRow = n - 1;
	let endColumn = n - 1;
	let startRow = 0;
	let startColumn = 0;
	let counter = 1;
	while (startColumn <= endColumn && startRow <= endRow) {
		for (let i = startColumn; i <= endColumn; i++) {
			result2dArray[startRow][i] = counter;
			counter++;
		}
		startRow++;
		for (let i = startRow; i <= endRow; i++) {
			result2dArray[i][endColumn] = counter;
			counter++;
		}
		endColumn--;
		for (let i = endColumn; i >= startColumn; i--) {
			result2dArray[endRow][i] = counter;
			counter++;
		}
		endRow--;
		for (let i = endRow; i >= startRow; i--) {
			result2dArray[i][startColumn] = counter;
			counter++;
		}
		startColumn++;
	}
	return result2dArray;
}

module.exports = matrix;
