export function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      deck: params.get("deck"),
      players: parseInt(params.get("players") || 1),
    };
  }
  