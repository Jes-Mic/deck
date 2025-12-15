import { CONFIG } from "./config.js";
import { getURLParams } from "./utils/url.js";
import { shuffle } from "./utils/shuffle.js";
import { generateDeckArcs, drawInitial } from "./decks/arcs.js";

const { deckName, players } = getURLParams();
const resetBtn = document.getElementById("reset-btn");

document.title = `${deckName.toUpperCase()}`;
const h1 = document.querySelector('h1');
h1.textContent =`${deckName.toUpperCase()}`;
h1.style.visibility = "visible";

let deck = [];
let hand = [];

/* =========================
   INITIALISATION ARCS
========================= */
function initArcsDeck() {
    console.log("Initialisation du deck Arcs");

    // Reset
    deck = generateDeckArcs();
    shuffle(deck);

    hand = drawInitial(deck, players);
    displayHand(hand);
}

if (deckName === CONFIG.DECK_ARCS_NAME) {
    initArcsDeck();
}

/* =========================
   AFFICHAGE
========================= */
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

/* =========================
   REMPLACEMENT
========================= */
function replaceCard(index) {
    if (deck.length === 0) {
        alert("Le deck est vide !");
        console.log("Deck vide, impossible de remplacer");
        return;
    }

    const newCard = deck.pop();
    hand[index] = newCard;
    // console.log("Remplacement de la carte à l’index", index, "par", newCard, "cartes restantes :", deck.length);
    
    const img = document.querySelectorAll(".card img")[index];
    img.src = newCard.image;
}

/* =========================
   LANCEMENT
========================= */
if (deckName === CONFIG.DECK_ARCS_NAME) {
    initArcsDeck();

    resetBtn.addEventListener("click", initArcsDeck);
} else {
    resetBtn.style.display = "none";
}