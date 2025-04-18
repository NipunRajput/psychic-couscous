let isAlive = false;
let card = [];
let sum = 0;

let cardStr = document.getElementById("card-id");
let sumStr = document.getElementById("sum-id");
let title = document.getElementById("display");

function pickCard() {
    card = [];
    sum = 0;

    let firstCard = Random();
    let secondCard = Random();

    card.push(firstCard, secondCard);
    sum = firstCard + secondCard;

    isAlive = true;
    renderGame();
}

function newCard() {
    if (isAlive && sum < 21) {
        let newVal = Random();
        card.push(newVal);
        sum += newVal;
        renderGame();
    }
}

function renderGame() {
    cardStr.textContent = "Cards: " + card.join(" ");
    sumStr.textContent = "Sum: " + sum;

    if (sum < 21) {
        title.textContent = "Pick a New Card";
    } else if (sum === 21) {
        title.textContent = "BlackJack!!!";
        isAlive = false;
    } else {
        title.textContent = "You Lose!!!";
        isAlive = false;
    }
}

function Random() {
    let value = Math.floor(Math.random() * 13) + 1;
    if (value === 1) {
        return 11;
    } else if (value > 10) {
        return 10;
    }
    return value;
}
