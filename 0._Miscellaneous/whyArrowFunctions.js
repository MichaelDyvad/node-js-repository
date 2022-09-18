//Hvorfor bruger man arrow functions
//Vi kommer ikke til at lave klasser i det her fag
class Buffalo{
    constructor(name){
        this.name = name;

    }

    tellName(){
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    }

    //arrow function kan binde "this" keyword. Brug helst arrowfunctions
    tellNameArrowFunction = () => {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
}

const buffalo = new Buffalo("Bill's buffalo");
buffalo.tellName();
buffalo.tellNameArrowFunction();