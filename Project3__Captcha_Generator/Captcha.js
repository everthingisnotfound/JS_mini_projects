const display = document.getElementById("status");
const body = document.body;
const submit = document.getElementById("submit");
const refresh = document.getElementById("refresh");
const generator = document.getElementById("generator");
const clientText = document.getElementById("client-text");
const audioCaptcha = document.getElementById("audioCaptcha");
const toggleTheme = document.getElementById("toggleTheme");

const successAudio = document.getElementById("successAudio");
const failureAudio = document.getElementById("failureAudio");

const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let captcha = "";

// Generate Captcha
function generateCaptcha() {
    const captchaLength = 6;
    captcha = "";

    for (let i = 0; i < captchaLength; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        
        captcha += char[randomIndex];
    }
    generator.value = captcha;
    display.innerText = "Captcha Generator";
    clientText.value = "";
}

// Check Captcha
submit.onclick = function () {
    const input = clientText.value.trim();

    if (input === "") {
        display.innerText = "👇 Please Enter the text shown Below 👇";
    } else if (input === captcha) {
        display.innerText = "👍 Correct! You have passed the Captcha Test!";
        successAudio.play(); // Play success audio
    } else {
        display.innerText = "🚫 Incorrect! Try again!";
        failureAudio.play(); // Play failure audio
    }
};

// Refresh Captcha
refresh.onclick = generateCaptcha;

// Play Audio CAPTCHA
audioCaptcha.onclick = function () {
    const audio = new SpeechSynthesisUtterance(captcha);
    audio.rate = 0.8; // Slow down the speech
    window.speechSynthesis.speak(audio);
};

// Toggle Dark Mode
toggleTheme.onclick = function () {
    body.classList.toggle("dark");
    toggleTheme.innerText = body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
};

// Initialize on load
body.onload = generateCaptcha;
