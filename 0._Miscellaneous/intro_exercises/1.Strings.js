// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numberOneFloat = parseFloat(numberOne);
const numberTwoFloat = parseFloat(numberTwo);
console.log(numberOneFloat + numberTwoFloat)

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherNumberOneFixed = parseFloat(anotherNumberOne)
const anotherNumberTwoFixed = parseFloat(anotherNumberTwo)
const added = (anotherNumberOneFixed + anotherNumberTwoFixed).toFixed(2)
console.log(added);

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = ((one + two + three) / 3).toFixed(5)
console.log(average)





// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"
const letterC = letters[2]
console.log(letterC)


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const replaceCap = fact.replace("javascript", "Javascript")
//const letterJCap = fact.substring(0, 17) + fact.charAt(17).toUpperCase() + fact.substring(18)
console.log(replaceCap)
// --------------------------------------