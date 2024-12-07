// Wait for DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("userText");
    const biggerButton = document.getElementById("biggerButton");
    const fancyRadio = document.getElementById("fancyShmancy");
    const boringRadio = document.getElementById("boringBetty");
    const mooButton = document.getElementById("mooButton");

    // Function to make text bigger using setInterval
    const makeTextBigger = () => {
        textarea.style.fontSize = "24pt";
    };    

    // Function to apply FancyShmancy styles
    const applyFancyStyle = () => {
        alert("FancyShmancy selected!"); // Pop up alert
        textarea.style.fontWeight = "bold"; // Make text bold
        textarea.style.color = "blue"; // Change color to blue
        textarea.style.textDecoration = "underline"; // Underline the text
    };

    // Function to remove FancyShmancy styles (BoringBetty)
    const removeFancyStyle = () => {
        alert("BoringBetty selected!"); // Pop up alert
        textarea.style.fontWeight = "normal"; // Reset font weight
        textarea.style.color = "black"; // Reset color
        textarea.style.textDecoration = "none"; // Remove underline
    };

    // Function to uppercase text and add "-Moo"
    const makeTextMoo = () => {
        let text = textarea.value.toUpperCase(); // Uppercase the text
        let sentences = text.split("."); // Split into sentences
        text = sentences
            .map(sentence => sentence.trim() + "-Moo") // Add "-Moo" to each sentence
            .join(". "); // Join sentences back
        textarea.value = text; // Update textarea value
    };

    function showAlert() {
        alert("Hello, world!");
    }

    // Event listeners
    biggerButton.addEventListener("click", makeTextBigger);
    fancySchmancy.addEventListener('change', applyFancyStyle);
    boringBetty.addEventListener('change', removeFancyStyle);
    mooButton.addEventListener("click", makeTextMoo);
});