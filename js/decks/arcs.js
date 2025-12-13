export function generateDeckArcs() {
    const deck = [];
    for (let i = 1; i <= 31; i++) {
        const num = String(i).padStart(2, "0");
        deck.push({
            id: `arcs${num}`,
            image: `cartes/arcs/${num}.jpg`
        });
    }
    return deck;
}

export function drawInitial(deck, players) {
    const count = players === 2 ? 3 : 4;
    const hand = deck.splice(0, count);
    return hand;
}