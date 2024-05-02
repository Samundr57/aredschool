document.addEventListener("DOMContentLoaded", function() {
  const textContainer = document.querySelector("#animatedText");
  const words = textContainer.textContent.trim().split(" ");
  textContainer.textContent = ""; // Clear text content

  let index = 0;
  let wordIndex = 0;
  let timeoutId = null;

  // Function to animate the words
  function animateWords() {
    // Create span element for each word
    const wordSpan = document.createElement("span");
    wordSpan.textContent = words[wordIndex];
    textContainer.appendChild(wordSpan);

    // Add space after each word
    textContainer.appendChild(document.createTextNode(" "));

    // Display the words one by one
    setTimeout(() => {
      wordSpan.style.opacity = "1";
      wordIndex++;

      if (wordIndex < words.length) {
        animateWords(); // Continue to next word
      } else {
        // Start animation again after displaying all words
        setTimeout(() => {
          // Clear previous timeout (if any) and reset animation
          clearTimeout(timeoutId);
          textContainer.innerHTML = ""; // Clear the container
          wordIndex = 0; // Reset word index
          animateWords(); // Start animation again
        }, 3000); // Wait for 3 seconds before restarting animation
      }
    }, 300); // Adjust the delay between words as needed
  }

  // Initial animation
  animateWords();
});
