// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function createFreqMap(str) {
	const freqMap = new Map();
	for (const char of str) {
		if (freqMap.has(char)) {
			const count = freqMap.get(char);
			freqMap.set(char, count + 1);
		} else {
			freqMap.set(char, 1);
		}
	}
	return freqMap;
}
function maxChar(str) {
	const freqMap = createFreqMap(str);
	const maxFreq = Math.max(...Array.from(freqMap.values()));
	for (const [char, freq] of freqMap) {
		if (freq === maxFreq) {
			return char;
		}
	}
}

module.exports = maxChar;
