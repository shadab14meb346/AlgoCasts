// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibIterative(n) {
	const result = [0, 1];
	for (let i = 2; i <= n; i++) {
		result[i] = result[i - 1] + result[i - 2];
	}
	return result[n];
}

// function fib(n) {
// 	if (n < 2) return n;
// 	return fib(n - 1) + fib(n - 2);
// }
function memoize(fn) {
	const cache = {};
	return function (...args) {
		if (cache[args]) {
			return cache[args];
		}
		const result = fn.apply(this, args);
		cache[args] = result;
		return result;
	};
}
// fib = memoize(fib);
function fib(n) {
	if (n < 2) return n;
	let prev = 0;
	let next = 1;
	let current = 0;
	for (let i = 1; i < n; i++) {
		current = prev + next;
		prev = next;
		next = current;
	}
	return current;
}
module.exports = fib;
