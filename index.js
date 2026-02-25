
let homeCount = 0;
let guestCount = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score")

function incrementHomeOne(){
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function incrementHomeTwo(){
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function incrementHomeThree(){
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function incrementGuestOne(){
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function incrementGuestTwo(){
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function incrementGuestThree(){
    guestCount += 3;
    guestScore.textContent = guestCount;

}