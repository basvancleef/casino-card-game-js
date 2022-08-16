let points = 0;
let moves = [];

// Randomizer
function randomizer(min, max) {
    return Math.round(Math.random() * max) + min;
}

// Kaarten ophalen
const cards = [
    "2_of_clubs.png",
    "2_of_diamonds.png",
    "2_of_hearts.png",
    "2_of_spades.png",
    "3_of_clubs.png",
    "3_of_diamonds.png",
    "3_of_hearts.png",
    "3_of_spades.png",
    "4_of_clubs.png",
    "4_of_diamonds.png",
    "4_of_hearts.png",
    "4_of_spades.png",
    "5_of_clubs.png",
    "5_of_diamonds.png",
    "5_of_hearts.png",
    "5_of_spades.png",
    "6_of_clubs.png",
    "6_of_diamonds.png",
    "6_of_hearts.png",
    "6_of_spades.png",
    "7_of_clubs.png",
    "7_of_diamonds.png",
    "7_of_hearts.png",
    "7_of_spades.png",
    "8_of_clubs.png",
    "8_of_diamonds.png",
    "8_of_hearts.png",
    "8_of_spades.png",
    "9_of_clubs.png",
    "9_of_diamonds.png",
    "9_of_hearts.png",
    "9_of_spades.png",
    "10_of_clubs.png",
    "10_of_diamonds.png",
    "10_of_hearts.png",
    "10_of_spades.png",
    "ace_of_clubs.png",
    "ace_of_diamonds.png",
    "ace_of_hearts.png",
    "ace_of_spades.png",
    "jack_of_clubs2.png",
    "jack_of_diamonds2.png",
    "jack_of_hearts2.png",
    "jack_of_spades2.png",
    "king_of_clubs2.png",
    "king_of_diamonds2.png",
    "king_of_hearts2.png",
    "king_of_spades2.png",
    "queen_of_clubs2.png",
    "queen_of_diamonds2.png",
    "queen_of_hearts2.png",
    "queen_of_spades2.png"
];

// Kaart waarde
const cardValues = [
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    9,
    9,
    9,
    9,
    10,
    10,
    10,
    10,
    14,
    14,
    14,
    14,
    11,
    11,
    11,
    11,
    13,
    13,
    13,
    13,
    12,
    12,
    12,
    12

];

// Start game
function initialiseGame() {
    showNextCard();
}

// Gok knoppen functies
function triggerGuess(Element) {
    let cardId = document.getElementById("cardId").innerHTML;
    cards.splice(cardId, 1);
    cardValues.splice(cardId, 1);

    let randomInt = randomizer(0,cards.length-1);
    console.log(cards.length);
    console.log(cardValues.length);
    console.log(randomInt);
    let currentValue = document.getElementById("Value").innerHTML;
    console.log("currentvalue: "+currentValue);
    let nextValue = cardValues[randomInt];
    console.log("nextvalue: "+nextValue);
    let lastMoveResult = '-';
    if (Element.id == 'higher') {
        if (currentValue < nextValue) {
            lastMoveResult = "good";
            points+=1;
        } else {
            lastMoveResult = "wrong";
        }
    } else if (Element.id == 'lower') {
        if (currentValue > nextValue) {
            lastMoveResult = "good";
            points+=1;
        } else {
            lastMoveResult = "wrong";
        }
    } else if (Element.id == 'equal') {
        if (currentValue == nextValue) {
            lastMoveResult = "good";
            points+=2;
        } else {
            lastMoveResult = "wrong";
        }
    } else {
        console.log('Unknown action');
    }

    showNextCard(randomInt);
    console.log(points)
    moves.push(lastMoveResult);
    if (moves.length == 52) {
        let Image = document.querySelector(".Image");
        Image.querySelector("IMG").src = 'assets/cards/card_back.svg';
        document.querySelector(".buttons").style.display = 'none';
        return false;
    }

    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    let goodMoves = countOccurrences(moves, 'good');
    let percentage = Math.round(goodMoves/moves.length*100);
    document.getElementById("Score").innerHTML = points;
    document.getElementById("Moves").innerHTML = moves.length;
    document.getElementById("Percentage").innerHTML = percentage;
    document.getElementById("lastMoveResult").innerHTML = lastMoveResult;
}

// Volgende kaart laten zien
function showNextCard(nextCard) {
    let Image = document.querySelector(".Image");
    let randomInt = null;
    if (nextCard) {
        randomInt = nextCard;
    } else {
        randomInt = randomizer(0,cards.length-1);
    }
    Image.querySelector("IMG").src = './assets/cards/' + cards[randomInt];
    Image.querySelector("#Value").innerHTML = cardValues[randomInt];
    Image.querySelector("#cardId").innerHTML = randomInt;
}