import express from "express";
import { get } from "http";
//Path er et nodemodule som gør at path virker på alle pc'er
import path from "path";
//Et bibliotek der skal instantieres
const app = express();

app.use(express.static("public"))   

//Http, endpoint, callback
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"));
    
});

app.get("/battle",(req, res) => {
    res.sendFile(path.resolve("./public/battle/battle.html"))
})

app.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(data => {
        res.send({pokemon:data})
    })
});

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


