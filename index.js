const homeScore = document.getElementById("scoreHome")
const guestScore = document.getElementById("scoreGuest")

let homePoints = 0
let guestPoints = 0

function addOne() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function addTwo() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function addThree() {
    homePoints += 3
    homeScore.textContent = homePoints
}


function addOneGuest() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function addTwoGuest() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function addThreeGuest() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}