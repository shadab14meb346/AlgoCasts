// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
const noOfChars = (n, char) => {
	let result = '';
	for (let i = 0; i < n; i++) {
		result += char;
	}
	return result;
};
function steps1(n) {
	const space = ' ';
	const hash = '#';
	for (let i = 1; i <= n; i++) {
		console.log(noOfChars(i, hash) + noOfChars(n - i, space));
	}
}
function steps2(n) {
	const emptyArray = new Array(n);
	const equalizedArray = emptyArray.fill(' ');
	for (let i = 0; i < n; i++) {
		equalizedArray[i] = '#';
		console.log(equalizedArray.join(''));
	}
}
//recursion solution
function steps(n, row = 0, stair = '') {
	if (row === n) {
		return;
	}
	if (n === stair.length) {
		console.log(stair);
		steps(n, row + 1);
		return;
	}
	const add = stair.length <= row ? '#' : ' ';
	steps(n, row, stair + add);
}
module.exports = steps;
