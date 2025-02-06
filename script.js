const text = `Welcome, Traveler! 🌍✨
Kalos irthes, traveler from your distant land! Sit here, on my website, and let me tell you my story...

The Age of the Dragon 🐉⚔️
In an era where empires clashed and dragons soared across the skies, a warrior, a creator, and a seeker of knowledge was born. His name was Evangelos Gallos, the second son of a family of warriors, born on May 9, 1988. He grew up among five siblings, in a household where discipline and honor were carved into their very souls. His father, a hardened soldier, taught him that in life, as in battle, perseverance is the mightiest weapon.

Evangelos embarked on his journey as a warrior, serving in the Special Forces of the Hellenic Marine Corps, mastering survival in extreme conditions, combat strategy, and the art of resilience. But the world was not only made of battles. His passion for technology and creation led him to forge his own kingdom—a business in Greece, which stood strong against the storms of economic crisis until fate led him to the distant lands of Sweden.

There, in this new realm, he fought to rebuild his life. Working as a driver and a laborer, he tested his strength in trade, bringing Greek mountain tea from Olympus to Scandinavia. Yet, the fire of creation inside him never faded. He dedicated two years to UX/UI Design, sending countless messages to kingdoms (companies), seeking a place among them, yet the gates remained closed—the competition was fierce.

But Evangelos did not waver. With vision and resilience, he ventured into the world of System Development, forging his destiny through programming languages and the alchemy of technology. Along his journey, he built a unique project—a website crafted in the style of a console terminal, a reflection of his soul as both a developer and a warrior of the digital realm.

Yet fate had one more treasure in store for him—love. On August 3, 2024, Evangelos married a wonderful woman, and together they moved to Norrköping, starting a new, beautiful life. There, between the city lights and the whispering forests, he finds balance in video games, chess, hiking, and kayaking, exploring the world as he explores code—with curiosity and passion.

But his journey is far from over. Evangelos Gallos is not just a hero of life. He is a warrior of tomorrow, a creator, a traveler of time and imagination.

And the next chapter? It is being written now...`;

const outputElement = document.getElementById('output');
const cursorElement = document.querySelector('.cursor-box');
let index = 0;

function typeEffect() {
    if (index < text.length) {
        outputElement.innerHTML += text[index];
        index++;
        setTimeout(typeEffect, 50);
    } else {
        cursorElement.style.display = 'none'; // Κρύψε τον cursor μετά το typing
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
