import { CONFIG } from "./config.js";
import { getURLParams } from "./utils/url.js";
import { shuffle } from "./utils/shuffle.js";
import { generateDeckArcs, drawInitial } from "./decks/arcs.js";

const { deckName, players } = getURLParams();

document.title = `${deckName.toUpperCase()}`;
const h1 = document.querySelector('h1');
h1.textContent =`${deckName.toUpperCase()}`;
h1.style.visibility = "visible";

let deck = [];
if (deckName === CONFIG.DECK_ARCS_NAME) {
    deck = generateDeckArcs();
}

shuffle(deck);

let hand = [];
if (deckName == CONFIG.DECK_ARCS_NAME) {
    hand = drawInitial(deck, players);
}
displayHand(hand);

function displayHand(cards) {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    cards.forEach((card, index) => {
        const wrap = document.createElement("div");
        wrap.classList.add("card"); // <-- important pour le CSS
        wrap.innerHTML = `
            <img src="${card.image}" alt="${card.id}">
            <button class="replace-btn" data-index="${index}">Remplacer</button>
        `;
        container.appendChild(wrap);
    });

    document.querySelectorAll(".replace-btn").forEach(btn => {
        btn.onclick = () => replaceCard(btn.dataset.index);
    });
}

function replaceCard(index) {
    if (deck.length === 0) {
        alert("Le deck est vide !");
        console.log("Deck vide, impossible de remplacer");
        return;
    }
    const newCard = deck.pop();
    console.log("Remplacement de la carte à l’index", index, "par", newCard);
    const img = document.querySelectorAll(".card img")[index];
    img.src = newCard.image;
}