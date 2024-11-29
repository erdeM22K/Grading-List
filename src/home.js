//Neue Game-Array anlegen
const gameImages = {
    game1: [
        '/assets/tlou_1.png',
        '/assets/tlou_2.png',
        '/assets/tlou_3.png',
        '/assets/tlou_4.png',
    ],
    game2: [
        '/assets/minecraft_1.jpg',
        '/assets/minecraft_2.jpg',
    ],
    game3: [
        '/assets/deadpool_1.jpeg',
        '/assets/deadpool_2.jpeg',
        '/assets/deadpool_3.jpg',
    ],
    game4: [
        '/assets/batman_1.jpeg',
        '/assets/batman_2.jpeg',
        '/assets/batman_3.jpg',
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
