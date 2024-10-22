const display = document.getElementById("status");
const body = document.body;
const submit = document.getElementById("submit");
const refresh = document.getElementById("refresh");
const generator = document.getElementById("generator");
const clientText = document.getElementById("client-text");

const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Allowed characters for captcha
let captcha = "";

function generateCaptcha() {
    const captchaLength = 6;
    captcha = ""; // Reset captcha each time

    for (let i = 0; i < captchaLength; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        captcha += char[randomIndex]; // Create random captcha
    }
    generator.value = captcha; // Set the generated captcha in the input field
    display.innerText = "Captcha Generator"; // Reset display message
    body.style.backgroundColor = ""; // Reset background color on new captcha
    clientText.value = ""; // Clear the client text input field
}

// Generate captcha on page load
body.onload = generateCaptcha;

submit.onclick = function checkInput() {
    const input = clientText.value.trim(); // Trim input to avoid leading/trailing spaces
    console.log(`User Input: "${input}", Captcha: "${captcha}"`); // Log input and captcha

    if (input === "") {
        display.innerText = "👇 Please Enter the text shown Below 👇";
        body.style.backgroundColor = ""; // Reset background color
    } else if (input === captcha) {
        display.innerText = "👍 Correct! You have passed the Captcha Test!";
        body.style.backgroundColor = ""; // Reset background color for correct input
    } else {
        display.innerText = "🚫 Incorrect! Try again!";
        body.style.backgroundColor = "red"; // Change background color to red for incorrect input
        console.log("Background color changed to red."); // Log background change

        // Reset background color after 2 seconds
        setTimeout(() => {
            body.style.backgroundColor = ""; // Reset after 2 seconds
        }, 2000);
    }
};

refresh.onclick = function refreshCaptcha() {
    generateCaptcha(); // Call the function to regenerate captcha
    clientText.value = ""; // Clear the client text input field on refresh
};
