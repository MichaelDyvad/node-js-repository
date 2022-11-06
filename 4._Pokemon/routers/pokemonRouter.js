//Routers bliver brugt til at serve api
import { Router } from "express";
const router = Router();

router.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(result => res.send({ data: result }));
});

export default router;