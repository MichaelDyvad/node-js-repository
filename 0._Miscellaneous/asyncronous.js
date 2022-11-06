/*
Why: Javascript is single-threaded
If we didn't write asynchronous code we would have blocking code

Use cases of asyncronous code:
- Data traveling over a network (fetch)
- Reading and writing to files
- Import when asynchronusly calling URLS
- Interacting with a database
- Heavy calculations
- Encryption/Decryption

Basically anything that takes time (since we dont  want to block and prevent other code from running).

Solution 1:
Callback functions:
Problem: Callback hell, Pyramid of doom


Solution 2:
Introducing promises!
.then(()=>{})
Can have two diffrent states:
- Pending
- Fulfilled
        -Resolved, Rejected

Solution 3:
Introducing async/await.
Again syntactic sugar
Choose one way to do it and then always do it in that way
*/

new Promise((resolve, reject)=> {
    try{
        throw new Error;
        resolve("Yaay");
    }catch(stackTrace){
        reject("Nay");
    }
    
})
.then(successMessage => console.log(successMessage))
.catch(errorMessage => console.log(errorMessage));

/*
function somethingGoodSomethingBad(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            try{
                resolve("Something good");
            }catch(stackTrace){
                reject("Something bad");
            }
        },3000)
    })
    .then(somethingGoodMessage => {somethingGoodMessage})
    .then(somethingBadMessage => {somethingBadMessage})   
}
*/


function somethingGoodSomethingBad1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error("Bad")
                resolve("Good");
            }catch(errorMessage){
                reject("Bad")
            }
        },3000)
    })
}
/*
somethingGoodSomethingBad1()
.then(shouldBeGood => console.log(shouldBeGood))
.catch(shouldBeBad => console.log(shouldBeBad))
*/

const shouldBeGood = await somethingGoodSomethingBad1();




function howAwesomeAmI(name){
    return new Promise((resolve, reject) => {
        try {
            resolve(name + " is very awesome");
        }catch(errorMessage){
            reject("Bad")
        }
    })
}
/*
howAwesomeAmI("michael")
.then(answer => console.log(answer))
*/

//IIFE(imediately invoked function expression) er man wrapper metoden rundt i parateser og det gør at metoden bliver kaldt med det samme og er hurtigere i frontend, fordi functionen ikke skal invokes
(async function asyncAwaitExample() {
    try {
        const shouldBeGood = await somethingGoodSomethingBad();
        const awesomeMessage = await howAwesomeAmI("Michael");

        console.log(shouldBeGood, awesomeMessage);
    } catch (errorMessage) {
        console.log(errorMessage);
    }

})()

asyncAwaitExample();