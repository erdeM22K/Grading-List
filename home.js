//Neue Game-Array anlegen
const gameImages = {
    game1: [
        '/assets/tlou_1.png',
        '/assets/tlou_2.png',
        '/assets/tlou_3.png',
        '/assets/tlou_4.png',
    ],
    game2: [
        '/assets/tlou_1.png',
        '/assets/tlou_2.png',
        '/assets/tlou_3.png',
        '/assets/tlou_4.png',
    ],
    game3: [
        '/assets/tlou_1.png',
        '/assets/tlou_2.png',
        '/assets/tlou_3.png',
        '/assets/tlou_4.png',
    ],
    game4: [
        '/assets/tlou_1.png',
        '/assets/tlou_2.png',
        '/assets/tlou_3.png',
        '/assets/tlou_4.png',
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
