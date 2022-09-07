//Import
const express = require("express");
const app = express();

app.listen(8080, () => {
    console.log("Server is running on port", 8080)
});


//Lavet en array med de forskellige våben og bruger deres index
const myWeapons = ["AK-47", "Colt", "Glock", "Knife", "Bazooka"];

//Henter alle våben på endpointed /weapons
app.get("/weapons", (req, res) => {
    res.send({
        weapon1: myWeapons[0],
        weapon2: myWeapons[1],
        weapon3: myWeapons[2],
        weapon4: myWeapons[3],
        weapon5: myWeapons[4]
    })
})


//Weapons bliver fundet på id i url og der bliver brugt indeksering på myArray til det specifikke våben
app.get("/weapons/:id", (req, res) => {
    res.send({ weapon: myWeapons[req.params.id] })
})