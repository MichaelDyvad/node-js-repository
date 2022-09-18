import express from "express";
const app = express();

//Sikkerheds feature
app.use(express.static("public"))

import path from "path";

//Cant do dis ever... must read as a file
/*
import packageJSON from "./package.json"
console.log(packageJSON);
*/

import { incrementVisitorCounter } from "./geocitiesUtil.js";

app.get("/", (req, res) => {
    console.log("Visitors since the server started", incrementVisitorCounter())
    //Kan ikke bruge __dirname når det ikke er common js
    // res.sendFile(__dirname + "/public/frontpage.html")

    res.sendFile(path.resolve("./public/frontpage.html"));
});


// choose the port
app.listen(8080, () => {
    console.log("Server is running on port", 8080)
});