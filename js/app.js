import { goToDeck } from "./navigation.js";
import { CONFIG } from "./config.js";

document.querySelectorAll(".deck-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const deckName = btn.dataset.deck;
        let players;
        
        if (deckName == CONFIG.DECK_ARCS_NAME) {
            const selectId = btn.dataset.playersTarget;
            const select = document.getElementById(selectId);
            players = parseInt(select.value);
        } else {
            players = parseInt(btn.dataset.players);
        }
        goToDeck(deckName, players);
    });
});
