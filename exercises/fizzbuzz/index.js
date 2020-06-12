// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
function numberMultipleOfFive(number) {
  if(number < 5) return false;
  return !(number % 5)
}
function numberMultipleOfThree(number) {
      if(number < 3) return false;
  return !(number % 3)
}
function numberMultipleOfBothThreeAndFive(number) {
      if(number < 5 ) return false;
  return numberMultipleOfFive(number) && numberMultipleOfThree(number)
}
function fizzBuzz(n) {
  for(let i = 1; i <= n; i++) {
    if(numberMultipleOfThree(i) && !numberMultipleOfBothThreeAndFive(i)) {
      console.log("fizz");
      continue;
    }
    if(numberMultipleOfFive(i) && !numberMultipleOfBothThreeAndFive(i)) {
      console.log("buzz");
      continue;
    }
    if(numberMultipleOfBothThreeAndFive(i)) {
      console.log("fizzbuzz");
      continue;
    }
    console.log(i);
    }
}

module.exports = fizzBuzz;
