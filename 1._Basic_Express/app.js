// import
const express = require("express");
// instantiate the library express
const app = express();

app.use(express.json());

// route
app.get("/", (request, response) => {
    response.send({ message: "Created my first route. Check." });
});

// endpoint
app.get("/deers", (req, res) => {
    res.send({ size: "BIG" })
})

app.get("/deers/:id", (req, res) => {
    if (Number(req.params.id) === 1){
        res.send({name: "bambi", theBestAndMostOGDeer: true});
    }else{
        res.send({errorMessage: "dont know this deer, not og"});
    }
})

//REST convention actors og ikke actor
//URL med req.query: http://localhost:8080/actors?age=32&gender=male&name=Johnny%20Depp
//Spread altså ... gør at alt er på samme niveau istedet for nested
app.get("/actors", (req, res) => {
    res.send({
        message: "Information about the actor",
        info: req.query,
        ...req.query
    })
});

app.get("/cups", (req, res) => {
    res.send({
        size: "Small"
    })
})

// choose the port
app.listen(8080, () => {
    console.log("Server is running on port", 8080)
});


// ways to send data with GET
// this also works for all HTTP methods
//1.
//path variables
// /deers/{id}

//2.
// query parameters (query string)
// /deers?key=value&key2=value2


app.post("/actors", (req, res) => {
    console.log(req.body)
    res.send({data: req.body});
})

//Redirect
app.get("/lookunderbed", (req, res) => {
    let flashlight = req.query.flashlight
    if(flashlight === "true"){
        res.send({message: "You are safe"});
    }else{
        res.redirect("/monsters")
    }
    
})

app.get("/monsters", (req, res) => {
    res.send({data: "Scrazy breezy monster comming for u"})
})

//Den amerikanske uge starter søndag og hvis man fx bruger .getMonth() er det index, så september er 8
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
app.get("/timezone", (req, res) => {
    let dateNow = new Date();
    res.send({date: days[dateNow.getDay()]})
})
