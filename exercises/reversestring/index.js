// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	return str.split('').reverse().join('');
}

function reverse1(str) {
	let reversed = '';
	for (const character of str) {
		reversed = character + reversed;
	}
	return reversed;
}

function reverse2(str) {
	const charactersArray = str.split('');
	return charactersArray.reduce(
		(reversed, currentCharacter) => currentCharacter + reversed,
		''
	);
}
module.exports = reverse;
