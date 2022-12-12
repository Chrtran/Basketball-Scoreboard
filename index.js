let homeStoreEl =document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0
let nameGame = 0

function increaseHomeScoreOne() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function newGame() {
    let resetGame = nameGame
    guestScoreEl.textContent = resetGame
    homeStoreEl.textContent = resetGame
    homeScore = 0
    guestScore = 0
}