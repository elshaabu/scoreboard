let homeScore = 0
let guestScore = 0

function homeAdd1() {
    homeScore += 1
    document.getElementById("home-score-number").innerText = homeScore
}

function homeAdd2() {
    homeScore += 2
    document.getElementById("home-score-number").innerText = homeScore
}

function homeAdd3() {
    homeScore += 3
    document.getElementById("home-score-number").innerText = homeScore
}

function guestAdd1() {
    guestScore += 1
    document.getElementById("guest-score-number").innerText = guestScore
}

function guestAdd2() {
    guestScore += 2
    document.getElementById("guest-score-number").innerText = guestScore
}

function guestAdd3() {
    guestScore += 3
    document.getElementById("guest-score-number").innerText = guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0
    document.getElementById("home-score-number").innerText = homeScore
    document.getElementById("guest-score-number").innerText = guestScore
}

