//Import
import express from "express";
const app = express();

app.use(express.json());

app.listen(8080, () => {
    console.log("Server is running on port", 8080)
});


//Lavet en array med de forskellige våben og bruger deres index
const myWeapons = [
    {id:"0", name: "AK-47", ammunition: "40round" },
    {id:"1",  name: "Colt", ammunition: "22mm" },
    {id:"2",  name: "Glock", ammunition: "22mm" },
    {id:"3",  name: "Knife", ammunition: "hands" },
    {id:"4",  name: "Bazooka", ammunition: "rockets" }
];

//Henter alle våben på endpointed /weapons
app.get("/weapons", (req, res) => {
    res.send({
        weapons: myWeapons
    })
})


//Weapons bliver fundet på id i url og der bliver brugt indeksering på myArray til det specifikke våben
app.get("/weapons/:id", (req, res) => {
    res.send({ weapon: myWeapons[req.params.id] })
})

//Opretter et nyt våben til arsenalet
app.post("/weapons", (req, res) => {
    const postWeapon = req.body
    myWeapons.push(postWeapon)
    res.send("post route reached")
    console.log(myWeapons)
})

//Opdatere hele våben ressourcen på et id
app.put("/weapons/:id", (req, res) => {
    const idPut = req.params.id;
    const {id, name, ammunition} = req.body;
    const weaponToBeUpdated = myWeapons.find((weapon) => weapon.id === idPut)

    weaponToBeUpdated.id = id;
    weaponToBeUpdated.name = name;
    weaponToBeUpdated.ammunition = ammunition;

    res.send(`updated ${idPut}`)
})

//Opdatere dele af våben ressourcen på et id
app.patch("/weapons/:id", (req, res) => {
    const idPatch = req.params.id;
    const {name, ammunition} = req.body;
    const weaponToBeUpdated = myWeapons.find((weapon) => weapon.id === idPatch)
    
    if(name){
        weaponToBeUpdated.name = name;
    }

    if(ammunition){
        weaponToBeUpdated.ammunition = ammunition;
    }
    
    res.send(`updated ${idPatch}`)
})

//Sletter et våben på et id
app.delete("/weapons/:id", (req, res) => {
    const idDelete = req.params;
    myWeapons.splice([idDelete], 1)
    
    res.send("deleted")
})