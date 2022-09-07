// import
const express = require("express");
// instantiate the library express
const app = express();

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