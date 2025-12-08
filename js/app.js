// Tableau des cartes
let deck = [];
for (let i = 1; i <= 31; i++) {
    deck.push(`cartes/${String(i).padStart(2,'0')}.jpg`);
}

// Fonction pour créer le deck (copie pour réinitialiser)
let currentDeck = [...deck];

function drawCard() {
    if (currentDeck.length === 0) {
        document.getElementById("card-display").innerText = "Le deck est vide !";
        return;
    }

    const index = Math.floor(Math.random() * currentDeck.length);
    const card = currentDeck.splice(index, 1)[0];

    document.getElementById("card-display").innerHTML =
        `<img src="${card}" alt="carte">`;
}

function resetDeck() {
    currentDeck = [...deck];
    document.getElementById("card-display").innerText = "Deck recréé ! Tu peux piocher.";
}

// Lier les boutons
document.getElementById("draw").addEventListener("click", drawCard);
document.getElementById("reset").addEventListener("click", resetDeck);

