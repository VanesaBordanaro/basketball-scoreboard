let scoreHome = document.getElementById("home-count");
let countHome = 0;

function add1Home(){
    countHome += 1
    scoreHome.textContent = countHome
}

function add2Home(){
    countHome += 2
    scoreHome.textContent = countHome
}

function add3Home(){
    countHome += 3
    scoreHome.textContent = countHome
}

let scoreGuest = document.getElementById("guest-count");
let countGuest = 0

function add1Guest(){
    countGuest += 1
    scoreGuest.textContent = countGuest
}

function add2Guest(){
    countGuest += 2
    scoreGuest.textContent = countGuest
}

function add3Guest(){
    countGuest += 3
    scoreGuest.textContent = countGuest 
}

function resetGame(){
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
    countHome = 0
    countGuest = 0
}