// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
//my first solution
function anagrams1(stringA, stringB) {
	const filterString = (string) => {
		return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
	};
	return filterString(stringA) === filterString(stringB);
}
function freqMap(string) {
	const freq = {};
	for (const char of string) {
		freq[char] = freq[char] + 1 || 1;
	}
	return freq;
}
function filterSpecialCharacters(string) {
	return string.replace(/[^\w]/g, '');
}
function anagrams(stringA, stringB) {
	const stringACharFreqMap = freqMap(
		filterSpecialCharacters(stringA).toLowerCase()
	);
	const stringBCharFreqMap = freqMap(
		filterSpecialCharacters(stringB).toLowerCase()
	);
	if (
		Object.keys(stringACharFreqMap).length !==
		Object.keys(stringBCharFreqMap).length
	) {
		return false;
	}
	for (const [char, freq] of Object.entries(stringACharFreqMap)) {
		if (stringBCharFreqMap[char] !== freq) {
			return false;
		}
	}
	return true;
}
module.exports = anagrams;
