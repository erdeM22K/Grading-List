//Neue Game-Array anlegen
const gameImages = {
    game1: [
        'tlou_1.png',
        'tlou_2.png',
        'tlou_3.png',
        'tlou_4.png',
    ],
    game2: [
        'Grading-List/assets/minecraft_1.jpg',
        'Grading-List/assets/minecraft_2.jpg',
    ],
    game3: [
        'assets/deadpool_1.jpeg',
        'assets/deadpool_2.jpeg',
        'assets/deadpool_3.jpg',
    ],
    game4: [
        'assets/batman_1.jpeg',
        'assets/batman_2.jpeg',
        'assets/batman_3.jpg',
    ]
};


//Neue Game anlegen
let currentImageIndex = {
    game1: 0,
    game2: 0,
    game3: 0,
    game4: 0
};

function changeImage(direction, gameId) {
    const images = gameImages[gameId];
    currentImageIndex[gameId] = (currentImageIndex[gameId] + direction + images.length) % images.length;
    document.getElementById(`${gameId}-image`).src = images[currentImageIndex[gameId]];
}

const search = document.getElementById('searchbar');

search.addEventListener('input', function() {
    searchGame();  // Funktion aufrufen, wenn der Nutzer etwas eingibt
});

function searchGame() {
    const searchTerm = search.value.toLowerCase();  // Suchbegriff in Kleinbuchstaben umwandeln
    const games = document.querySelectorAll('.game-item');

    games.forEach(game => {
        const details = game.querySelectorAll('.game-item-description p');  // Alle p-Elemente sammeln

        // Überprüfen, ob ein p-Element den Suchbegriff enthält
        let matchFound = false;
        details.forEach(detail => {
            if (detail.innerText.toLowerCase().includes(searchTerm)) {
                matchFound = true;
            }
        });

        // Spiel anzeigen/verbergen je nach Treffer
        if (matchFound) {
            game.style.display = '';  // Anzeigen, wenn ein Treffer gefunden wurde
        } else {
            game.style.display = 'none';  // Verstecken, wenn kein Treffer vorhanden
        }
    });
}