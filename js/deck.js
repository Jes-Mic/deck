import { getURLParams } from "./utils/url.js";

const { deck, players } = getURLParams();

document.title = `${deck.toUpperCase()}`;
const h1 = document.querySelector('h1');
h1.textContent=`${deck.toUpperCase()}`;
h1.style.visibility = "visible";

function generateDeck() {
    const deckSize = 31;
    const newDeck = [];
    
    for (let i = 1; i <= deckSize; i++) {
        newDeck.push(`cartes/${String(i).padStart(2,'0')}.jpg`);
    }
    return newDeck;
}

let cardDeck = generateDeck();

const display = document.getElementById("card-display");
const drawBtn = document.getElementById("draw");
const resetBtn = document.getElementById("reset");

drawBtn.addEventListener("click", () => {
    if (cardDeck.length === 0) {
        display.innerText = "Le deck est vide !";
        return;
    }
    const idx = Math.floor(Math.random() * cardDeck.length);
    const card = cardDeck.splice(idx, 1)[0];
    display.innerHTML = `<img src="${card}" width="200">`;
});

resetBtn.addEventListener("click", () => {
    cardDeck = generateDeck();
    display.innerText = "Deck recréé !";
});