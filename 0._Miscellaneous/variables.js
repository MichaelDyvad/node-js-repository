//You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
//"use strict" is just a string, so IE 9 will not throw an error even if it does not understand it.
'use strict';

//Aldrig gør det her
//totalGlobalVariable = "Malthe"
//var globalVariable = "Malthe"

{
    let someValue = true;
    {
        let someValue = false;
    }
    //console.log(someValue);
}

{
    //var er global, derfor vil der blive console.logget false
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue)
}

//vi bruger kun const og let, fordi var skaber for mange problemer
const me = {
    name: "Michael"
};

//det er muligt at ændre en const i form af tilføjelse
const hobbies = [];
hobbies.push("Music");
me.hobbies = hobbies;
console.log(me);

//Mærkelig kode fordi man bruger var
for (var i = 0; i < 5; i++){
    setTimeout(()=> {
        console.log(i);
    }, 1000);
}