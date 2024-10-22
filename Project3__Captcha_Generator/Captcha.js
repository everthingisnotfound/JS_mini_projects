document.getElementById("generateButton").addEventListener("click", () => {
    const input = document.getElementById("userInput").value.trim();
    const lettersContainer = document.getElementById("lettersContainer");

    // Clear previous letters
    lettersContainer.innerHTML = '';

    // Create spans for each character in the input, including spaces
    for (const letter of input) {
        const span = document.createElement("span");
        span.textContent = letter === ' ' ? '\u00A0' : letter; // Use non-breaking space for better spacing
        lettersContainer.appendChild(span);
    }

    // Trigger automatic jumping animation
    const spans = lettersContainer.querySelectorAll("span");
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("active");
        }, index * 500); // Delay each letter's animation by 500ms
    });
});
