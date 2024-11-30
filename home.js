//Neue Game-Array anlegen
const gameImages = {
    game1: [
        './assets/tlou_1.png',
        './assets/tlou_2.png',
        './assets/tlou_3.png',
        './assets/tlou_4.png',
    ],
    game2: [
        './assets/minecraft_1.jpg',
        './assets/minecraft_2.jpg',
    ],
    game3: [
        './assets/deadpool_1.jpeg',
        './assets/deadpool_2.jpeg',
        './assets/deadpool_3.jpg',
    ],
    game4: [
        './assets/batman_1.jpeg',
        './assets/batman_2.jpeg',
        './assets/batman_3.jpg',
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

window.onload = function() {
    window.scrollTo(0, 0);  // Scrollt an den Anfang der Seite
};

//Pfeil scale bei klick
document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
        gsap.to(arrow, {
            duration: 0.3,
            scale: 1.2,
            yoyo: true,
            repeat: 1
        });
    });
});

//Header Fade-In von oben
gsap.fromTo("header *",{
    y: -100,
    opacity: 0,
    },
    {
    y: 0,
    duration: 1,
    stagger: 0.4,
    opacity: 1,
});

//Verzögerte Animation ersten beiden Spiele und ScrollTrigger
gsap.utils.toArray('.game-item').forEach((item, index) => {
    gsap.fromTo(item, {
        y: -10,
        opacity: 0,
    }, {
        delay: index < 2 ? 3.8 : 0,
        y: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,     
        },
    });
});

//Fade-In für die Spielbeschreibungen
gsap.utils.toArray('.game-item-description').forEach((desc, index) => {
    gsap.fromTo(desc, {
        y: -10,
        opacity: 0,
    }, {
        y: 0,
        delay: index < 2 ? 4.5 : 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: desc,
            start: 'top 90%',
            toggleActions: 'play none none none',
        },
    });
});

//Smoother Bilderübergang der Games
function changeImage(direction, gameId) {
    const images = gameImages[gameId];
    currentImageIndex[gameId] = (currentImageIndex[gameId] + direction + images.length) % images.length;
    
    const imageElement = document.getElementById(`${gameId}-image`);
    
    gsap.to(imageElement, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            imageElement.src = images[currentImageIndex[gameId]];
            
            gsap.fromTo(imageElement, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 0.3,
            });
        }
    });
}
