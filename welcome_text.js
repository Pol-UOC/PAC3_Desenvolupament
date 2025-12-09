const phrasesWelcome = [
    "Benvingut al futur de l'aprenentatge d'idiomes",
    "Welcome to the future of language learning",
    "Bienvenido al futuro del aprendizaje de idiomas",
    "Bienvenue dans le futur de l'apprentissage des langues",       // Francès
    "Willkommen in der Zukunft des Sprachenlernens",                // Alemany
    "Bem-vindo ao futuro da aprendizagem de línguas",               // Portuguès
    "ようこそ、言語学習の未来へ",                                       // Japonès
    "언어 학습의 미래へ 오신 것을 환영합니다",                            // Coreà
    "欢迎来到语言学习的未来",                                           // Xinès
];

const typingTextWelcome = document.getElementById("typing-text-Welcome");
const cursorWelcome = document.querySelector(".cursor-Welcome");
let indexWelcome = 0;
let charIndexWelcome = 0;
let newIndex = 0;
let isDeletingWelcome = false;


function typeLoopWelcome(){
    const currentPhrase = phrasesWelcome[indexWelcome];

    if(!isDeletingWelcome){
        typingTextWelcome.textContent = currentPhrase.substring(0, charIndexWelcome + 1);
        charIndexWelcome++;

        if(charIndexWelcome === currentPhrase.length){
            cursorWelcome.classList.remove("typing");
            setTimeout(() => { isDeletingWelcome = true; }, 1500);
        }
    } else {
        cursorWelcome.classList.add("typing");
        typingTextWelcome.textContent = currentPhrase.substring(0, charIndexWelcome - 1);
        charIndexWelcome--;


        if(charIndexWelcome === 0){
            isDeletingWelcome = false;

            do {
                newIndex = Math.floor(Math.random() * phrasesWelcome.length);
            } while (newIndex === indexWelcome);
            indexWelcome = newIndex;
        }
    }
    setTimeout(typeLoopWelcome, isDeletingWelcome ? 40 : 75);
}


typeLoopWelcome();