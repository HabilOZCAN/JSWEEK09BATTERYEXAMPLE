
//programp kapsamında kullanılan fonksiyonlar burada yazılmıştır.
let clickCounter = 0; //it is used as a main control parameter.

function clickCharge() {
    if (clickCounter < 3) {
        clickCounter++;
    }
    expressionIncreaseDecrease();
    chargeColourCode();
}

function clickDischarge() {
    if (clickCounter > 0) {
        clickCounter--;
    }
    expressionIncreaseDecrease();
    chargeColourCode();
}

function chargeColourCode() {
    switch (clickCounter) {
        case 0:
            document.getElementById("downBody").setAttribute('style', 'background-color: white');
            document.getElementById("midBody").setAttribute('style', 'background-color: white');
            document.getElementById("topBody").setAttribute('style', 'background-color: white');
            break;
        case 1:
            document.getElementById("downBody").setAttribute('style', 'background-color:  red');
            document.getElementById("midBody").setAttribute('style', 'background-color: white');
            document.getElementById("topBody").setAttribute('style', 'background-color: white');
            break;
        case 2:
            document.getElementById("downBody").setAttribute('style', 'background-color:  rgb(224, 127, 15)');
            document.getElementById("midBody").setAttribute('style', 'background-color: rgb(224, 127, 15)');
            document.getElementById("topBody").setAttribute('style', 'background-color: white');
            break;
        case 3:
            document.getElementById("downBody").setAttribute('style', 'background-color: green');
            document.getElementById("midBody").setAttribute('style', 'background-color: green');
            document.getElementById("topBody").setAttribute('style', 'background-color: green');
            break;
    }
}

function expressionIncreaseDecrease() {
    switch (clickCounter) {
        case 0:
            document.getElementById("percentage").innerText = " % 0";
            break;
        case 1:
            document.getElementById("percentage").innerText = "% 33.33";
            break;
        case 2:
            document.getElementById("percentage").innerText = " % 66.66";
            break;
        case 3:
            document.getElementById("percentage").innerText = "% 100";
            break;
    }
}