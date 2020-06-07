// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
function reverse(str) {
	return str.split('').reverse().join('');
}
function reverseInt1(n) {
	const stringedNumber = n.toString();
	const reversed = reverse(stringedNumber);
	if (n < 0) {
		return parseInt(reversed) * -1;
	}
	return parseInt(reversed);
}

// a more better solution
function reverseInt(n) {
	const reversed = reverse(n.toString());
	return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
