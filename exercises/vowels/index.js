// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels1(str) {
	const vowelRegex = /[a,e,i,o,u,]/;
	const lowerCaseStr = str.toLowerCase();
	let vowelCount = 0;
	for (let char of lowerCaseStr) {
		if (vowelRegex.test(char)) {
			vowelCount++;
		}
	}
	return vowelCount;
}
function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}
module.exports = vowels;
