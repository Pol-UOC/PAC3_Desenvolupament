const audio = document.getElementById('audio-exemple');
const typingBox = document.getElementById('typing-text');

const transcript = "The blocks of Barcelona are immediately recognizable. Every element of them was meticulously designed. And they are nothing like the Barcelona that came before, which was the densest city in Europe.";

function typeWriter(text, element, speed = 35) {
    element.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

audio.addEventListener('play', () => {
    typingBox.classList.remove('hidden');
    setTimeout(() => {
        typeWriter(transcript, typingBox);
    }, 3000);
});