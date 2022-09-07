//Functions er first class citizen
//Callback en function der bliver sendt videre som et argument
//console.log(add(5, 28));

//bliver hoisted
function add(a, b) {
    return a + b;
}

//Anonym function efter const navnet har ikke noget navn
const addAnonymFunction = function (a, b) {
    return a + b;
};

//Måde man laver en normal arrow function
const addArrowFunction = (a, b) => {
    return a + b;
};

//Måde mna laver en kompakt arrow function
const addarrowFunctionCompact = (a, b) => a + b;


//Callback function. 
function genericActionExecuter(anyCallbackFunction, name){
    return anyCallbackFunction(name);
}

const spitting = (name) => `${name} is spitting`;
console.log(genericActionExecuter(spitting, "Amanda"));


// Write a single line below without the above.
// task the output to the terminal should be: Amanda is spitting

//task create a fucntion that allows Malthe to shoot and call it
//task result should be: Malthe is shooting
const shooting = (name) => `${name} is shooting hang hang hang`;
console.log(genericActionExecuter(shooting, "Malthe"))


// Create a SINGLE statment below that console.logs "Murat" is running away

console.log(genericActionExecuter((name) => `${name} is running away`, "Murat"))