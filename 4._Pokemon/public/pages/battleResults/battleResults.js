fetch("/api/battleresults/winsandlosses")
.then(res => res.json())
.then(data => {
    const wins = document.getElementById("wins").innerText = data.wins
    const losses = document.getElementById("losses").innerText = data.losses
})