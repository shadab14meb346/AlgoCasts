// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
function pyramid1(n) {
	const columnsNo = 2 * n - 1;
	const midPoint = Math.floor(columnsNo / 2);
	for (let row = 0; row < n; row++) {
		let level = '';
		for (let column = 0; column < columnsNo; column++) {
			if (midPoint - row <= column && midPoint + row >= column) {
				level += '#';
			} else {
				level += ' ';
			}
		}
		console.log(level);
	}
}

module.exports = pyramid;
