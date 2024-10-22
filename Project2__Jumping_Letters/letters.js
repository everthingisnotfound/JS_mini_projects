document.getElementById("generateButton").addEventListener("click", () => {
    const input = document.getElementById("userInput").value.trim();
    const lettersContainer = document.getElementById("lettersContainer");

    // Clear previous letters
    lettersContainer.innerHTML = '';

    // Create spans for each letter in the input
    for (const letter of input) {
        if (letter) { // Only create spans for non-empty characters
            const span = document.createElement("span");
            span.textContent = letter;
            span.addEventListener("click", (e) => {
                e.target.classList.add("active");
            });
            lettersContainer.appendChild(span);
        }
    }
});
