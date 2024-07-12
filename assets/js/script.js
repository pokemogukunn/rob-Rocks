fetch('../assets/data/games.json')
    .then(response => response.json())
    .then(games => {
        const gameListDiv = document.getElementById("game-list");

        games.forEach(game => {
            const gameItem = document.createElement("div");
            gameItem.className = "game-item";
            const gameLink = document.createElement("a");
            gameLink.href = `https://www.roblox.com/games/${game.id}/${game.name}`;
            gameLink.target = "_blank";
            gameLink.textContent = game.name;
            gameItem.appendChild(gameLink);
            gameListDiv.appendChild(gameItem);
        });
    });
