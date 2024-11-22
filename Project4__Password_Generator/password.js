const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const passwordInput = document.getElementById("password");
const notification = document.querySelector(".notification");
const notificationMessage = document.querySelector(".notification-message");

generateButton.onclick = function () {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const length = 16;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordInput.value = password;
    displayNotification("Password generated successfully!", "success");
};

copyButton.onclick = function () {
    const passwordValue = passwordInput.value;

    if (!passwordValue.trim()) {
        displayNotification("Password is empty! Generate one first.", "error");
    } else {
        navigator.clipboard.writeText(passwordValue).then(() => {
            displayNotification("Password copied to clipboard!", "success");
        }).catch(() => {
            displayNotification("Failed to copy password. Try again.", "error");
        });
    }
};

function displayNotification(message, type) {
    notificationMessage.textContent = message;
    notification.style.backgroundColor = type === "success" ? "#4cd137" : "#e84118";
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}
