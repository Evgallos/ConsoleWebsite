const text = `Greetings, Traveler... You have found my webpage.
My name is Evangelos Gallos, and I am a System Developer... `;

const outputElement = document.getElementById('output');
const cursorElement = document.querySelector('.cursor-box');
let index = 0;

function typeEffect() {
    if (index < text.length) {
        outputElement.innerHTML += text[index];
        createSparkleEffect();
        index++;
        setTimeout(typeEffect, 100);
    } else {
        cursorElement.style.display = 'none'; // Κρύψε τον cursor μετά το typing
    }
}

function createSparkleEffect() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    document.body.appendChild(sparkle);

    const rect = outputElement.getBoundingClientRect();
    sparkle.style.left = `${rect.left + window.scrollX + outputElement.offsetWidth - 10}px`;
    sparkle.style.top = `${rect.top + window.scrollY + 10}px`;

    setTimeout(() => {
        sparkle.remove();
    }, 500);
}

document.addEventListener("DOMContentLoaded", typeEffect);
