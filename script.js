const text = `Greetings, Traveler... You have found my webpage.
My name is Evangelos Gallos, and I am a System Developer... `;

const outputElement = document.getElementById('output');
const cursorElement = document.querySelector('.cursor-box');
let index = 0;

function typeEffect() {
    if (index < text.length) {
        outputElement.innerHTML += text[index];
        index++;
        setTimeout(typeEffect, 100);
    } else {
        cursorElement.style.display = 'none'; // Κρύψε τον cursor μετά το typing
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
