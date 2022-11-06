//Kalder en del af express biblioteket
import {Router} from "express";
import {main} from "../util/sendemail.js";


const router = Router()

router.post("/api/contact", (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const message = req.body.message
    const email = req.body.email

    main(name, email, message)
        .then(async () => {
            await res.send({
                data: `Message sent successfully: ${message}`
            })
        })
        .catch(errorMessage => {
            res.send({data: `${errorMessage}`})
        })
})

export default router

