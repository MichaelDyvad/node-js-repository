let visitCounter = 0;

export function incrementVisitorCounter(){
    visitCounter++;
    return visitCounter;
}

//Kan ikke bruge det her i module type syntax.. dette tilhører common js syntax
/*
module.exports = {
    incrementVisitorCounter: incrementVisitorCounter
};
*/