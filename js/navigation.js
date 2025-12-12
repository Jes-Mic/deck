export function goToDeck(deckName, players = 1) {
    window.location.href = `deck.html?deck=${deckName}&players=${players}`;
}