fetch("/pokemon")
        .then(reponse => reponse.json())
        .then(result => console.log(result));