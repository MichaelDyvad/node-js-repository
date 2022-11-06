import express from "express";
import { get } from "http";
//Path er et nodemodule som gør at path virker på alle pc'er
import path from "path";
//Et bibliotek der skal instantieres
const app = express();
app.use(express.json());

//den skal kører igennem alle lagene
app.use(express.urlencoded({extended: true}))

import pokemonRouter from "./routers/pokemonRouter.js"
app.use(pokemonRouter);

import battleRouter from "./routers/battleRouter.js"
app.use(battleRouter.router);

import battleResults from "./routers/battleResults.js"
app.use(battleResults);

import contactRouter from "./routers/contactRouter.js"
app.use(contactRouter);

import { renderPage, injectData } from "./util/templateEngine.js";

const battlePage = renderPage("/battle/battle.html",
    {
        tabtitle: "Battle",
        cssLink: `<link rel="stylesheet" href="/pages/battle/battle.css">`
    }
)

const frontpagePage = renderPage("/frontpage/frontpage.html", 
{   
    tabtitle: "Pokemon", 
    cssLink:`<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
})

const battleResultsPage = renderPage("/battleResults/battleResults.html", {
    tabtitle: "battleResults"
})

//skal gøres
const contactPage = renderPage("/contact/contact.html", 
{
    tabtitle: "Contact",
    cssLink: `<link rel="stylesheet" href="/pages/contact/contact.css>`

})

app.use(express.static("public"))   

//Http, endpoint, callback
app.get("/", (req, res) => {
    res.send(frontpagePage);
});

const randomPokemon = ["pikachu", "slowpoke", "ditto"]

app.get("/battle", (req, res) => {
res.redirect(`battle/${randomPokemon[Math.floor(Math.random() * randomPokemon.length)]}`)
})


//data injection
app.get("/battle/:pokemonName",(req, res) => {
    const pokemonName = req.params.pokemonName
    let battlePageWithData = injectData(battlePage, {pokemonName})
    res.send(battlePageWithData.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`));
})

app.get("/battleResults", (req, res) => {
    res.send(battleResultsPage)
})

//Dette er client side rendering
app.get("/contact", (req, res) => {
    res.send(contactPage)
})



const PORT = process.env.PORT || 8080;

//Husk der er ikke int i javacsript der er strings, numbers, booleans, undefined, and null
//2 argumenter            Number / Callback
const server = app.listen(PORT, (error) => {
    if(error){
        console.log(error)
    }
    console.log("Server is running on port", server.address().port)
});
//Linje nedeunder kører før app.listen, hvilket skyldes at javacsript ikke kører sekventielt
//console.log("is the server running?");