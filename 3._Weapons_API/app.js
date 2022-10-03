//Import
import express from "express";
const app = express();

app.use(express.json());

let currentId = 2;

app.listen(8080, () => {
    console.log("Server is running on port", 8080)
});


//Lavet en array med de forskellige våben og bruger deres index
let myWeapons = [
    {id:"1", name: "AK-47", ammunition: "40round" },
    {id:"2",  name: "Colt", ammunition: "22mm" },
    {id:"3",  name: "Glock", ammunition: "22mm" },
    {id:"4",  name: "Knife", ammunition: "hands" },
    {id:"5",  name: "Bazooka", ammunition: "rockets" }
];

//Henter alle våben på endpointed /weapons
app.get("/weapons", (req, res) => {
    res.send({
        weapons: myWeapons
    })
})


//Weapons bliver fundet på id i url og der bliver brugt indeksering på myArray til det specifikke våben
app.get("/weapons/:id", (req, res) => {
    const foundWeapon = myWeapons.find(weapon => weapon.id === Number(req.params.id))
    //res.send({ weapon: myWeapons[req.params.id] })
    res.send({ data: foundWeapon })
})

//Opretter et nyt våben til arsenalet
app.post("/weapons", (req, res) => {
    const postWeapon = req.body
    postWeapon.id = ++currentId;
    myWeapons.push(postWeapon);
    res.send({data: postWeapon})
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
    const foundIndex = myWeapons.findIndex(weapon => weapon.id === Number(req.params.id))

    if(foundIndex !== -1){
        const foundWeapon = myWeapons[foundIndex];
        const weaponToUpdate = {...foundWeapon, ...req.body, id: Number(req.params.id)};
        myWeapons[foundIndex] = weaponToUpdate;
        res.send({data: weaponToUpdate});
    }else{
        res.status(404).send({ data: undefined, message: `No Weapon found by id: ${req.params.id}` });
    }

})

//Sletter et våben på et id
app.delete("/weapons/:id", (req, res) => {
    const foundIndex = myWeapons.findIndex(weapon => weapon.id === Number(req.params.id))
    if(foundIndex !== -1){
        const deletedWeapon = myWeapons.splice(foundIndex, 1)[0];
        res.send({ data: deletedWeapon });
    }else{
        res.status(404).send({ data: undefined, message: `No Weapon found by id: ${req.params.id}` });
    }
    //, 1 gør den kun sletter 1 element
})