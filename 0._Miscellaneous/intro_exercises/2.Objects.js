// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

// Log the message 
console.log(alienMessage.message)
// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const myNameAndAge = {
	name: "Michael Dyvad",
	age: "22"
}

console.log(myNameAndAge.name, myNameAndAge.age)

// --------------------------------------
// Exercise 3 - Add a key-value pair 

const stackOverflow = {
};
stackOverflow.isAllowed = true;
stackOverflow["hello"] = "world";
// make a rule called isAllowed and let the value be true
console.log(stackOverflow.isAllowed, stackOverflow.hello)

// --------------------------------------
// Exercise 4 - Remove a key-value pair 

const thisSong = {
	description: "The best song in the world."
}

delete thisSong.description

console.log(thisSong.description)

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

thisSong.about = "Just a tribute"

console.log(thisSong.about)

// --------------------------------------


