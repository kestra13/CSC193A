/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // I can see this message in the console when I inspect the page
    console.log("Window loaded!");

    // This gets the "Encrypt-It!" button by its own ID
    const encryptButton = document.getElementById("encrypt-it");

    // This gets the "Reset" button by its own ID
    const resetButton = document.getElementById("reset");

    // This is a click event listener for an interaction with the button
    encryptButton.addEventListener("click", handleEncrypt);
    resetButton.addEventListener("click", handleReset);

    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

  // I can retrieve the input text, run it through the function that shifts the
  // letters by 1, and store it into a variable called result. I can then
  // have it be printed on the page
  function handleEncrypt() {
    console.log("Button clicked!");
    const inputText = document.getElementById("input-text").value; // Get the text
    const result = shiftCipher(inputText); // Encrypt the text
    document.getElementById("result").textContent = result; // Output the result
  }

  // I can see in the console that there was an interaction with the reset button
  function handleReset() {
    console.log("Reset button clicked!");
    // This will clear the content of the input-text textarea
    const inputText = document.getElementById("input-text");
    inputText.value = ""; // This clears the textarea content
  }

  // I can use this to encrypt the input-text in the textarea by creating a string
  // from the input text and identifying each char item between 'a' and 'z' (or
  // it isn't an empty space or special character) and shifting them +1 char value.
  function shiftCipher(text) {
    text = text.toLowerCase(); // Treat all letters as lowercase
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i]; // Non-alphabet characters stay the same
      } else if (text[i] === 'z') {
        result += 'a'; // Handle 'z' -> 'a'
      } else {
        let letter = text.charCodeAt(i); // Get ASCII value
        let resultLetter = String.fromCharCode(letter + 1); // Shift letter
        result += resultLetter;
      }
    }
    return result;
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
})();
