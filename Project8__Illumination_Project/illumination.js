// Select elements
const root = document.documentElement;
const textInput = document.getElementById("textInput");
const dynamicText = document.getElementById("dynamicText");

// Mousemove event for illumination
document.addEventListener("mousemove", (e) => {
    root.style.setProperty("--x", e.clientX + "px");
    root.style.setProperty("--y", e.clientY + "px");
});

// Update heading dynamically
textInput.addEventListener("input", () => {
    const inputText = textInput.value.trim();
    dynamicText.textContent = inputText || "Dino Code Academy";
});
