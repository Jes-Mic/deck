let deck = [];

// Charge automatiquement toutes les images du dossier /cartes
async function loadImages() {
    try {
        const response = await fetch("cartes/");
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const links = [...doc.querySelectorAll("a")];

        deck = links
            .map(link => link.getAttribute("href"))
            .filter(name => name.match(/\.(png|jpg|jpeg|webp|gif)$/i))
            .map(filename => "cartes/" + filename);

    } catch (e) {
        console.error("Impossible de charger les images :", e);
    }
}

async function createDeck() {
    await loadImages();
    document.getElementById("card-display").innerText = "Deck prêt !";
}

function drawCard() {
    if (deck.length === 0) {
        document.getElementById("card-display").innerText = "Le deck est vide !";
        return;
    }

    const index = Math.floor(Math.random() * deck.length);
    const card = deck.splice(index, 1)[0];

    document.getElementById("card-display").innerHTML =
        `<img src="${card}" alt="carte">`;
}

function resetDeck() {
    createDeck();
}

document.getElementById("draw").addEventListener("click", drawCard);
document.getElementById("reset").addEventListener("click", resetDeck);

createDeck();

