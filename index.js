
let homeCount = 0;
let guestCount = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score")

function incrementHomeOne(){
    homeCount += 1;
    homeScore.innerHTML = homeCount;
}

function incrementHomeTwo(){
    homeCount += 2;
    homeScore.innerHTML = homeCount;
}

function incrementHomeThree(){
    homeCount += 3;
    homeScore.innerHTML = homeCount;
}

function incrementGuestOne(){
    guestCount += 1;
    guestScore.innerHTML = guestCount;
}

function incrementGuestTwo(){
    guestCount += 2;
    guestScore.innerHTML = guestCount;
}

function incrementGuestThree(){
    guestCount += 3;
    guestScore.innerHTML = guestCount;

}