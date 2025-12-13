document.querySelectorAll(".deck-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const deckName = btn.dataset.deck;
        const select = document.getElementById(deckName)?.value || 1;
        const players = parseInt(select);

        window.location.href = `deck.html?deck=${deckName}&players=${players}`;
    });
});
