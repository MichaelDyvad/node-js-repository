const barbieMovies = [
    { name: "Swan lake", year: 2001},
    { name: "Princess and the pauper", year: 2008},
    { name: "Fairies", year: 2014}, 
];


const ratedBarbieMovies = barbieMovies.map((movie) => {
    movie.rating = 10;
    return movie;
})

const recentBarbieMovies = barbieMovies.filter((movie) => movie.year > 2005)

const eachBarbaieMovie = barbieMovies.forEach((movie) => {
    console.log(movie)
})

const reduceBarbieMovies = barbieMovies.reduce()

//console.log(eachBarbaieMovie);    


// loop methods
// forEach
// map, reduce, filter

/* Loop advice
Only use for loops if you are doing "finger counting", 
IE counting to a number

Don't use enhanced for loops

Only use forEach if you are doing someting and dont care about the result,
IE populating the dom with elements

Always prefer funtional loop methods such as:
map, filter and reduce.

Map for mapping 1:1 
Filter for filtering the array
Reduce to reducing the content of the array
*/