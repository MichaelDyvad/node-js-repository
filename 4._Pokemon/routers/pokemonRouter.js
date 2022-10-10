//Routers bliver brugt til at serve api
import {Router} from "express";
const router = Router();
console.log(router);


//route
router.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(data => {
        res.send({pokemon:data})
    })
});

export default router;