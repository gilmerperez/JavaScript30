function playSound(event) {
  // Finding the correct audio file to play based on which key was pressed, according to the keyCode
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  // If key with no audio element is pressed
  if (!audio) {
    console.log("No key matched that sound!"); // Alert the user
    return; // Exit
  }

  // With this we can spam the key and not wait for it to finish the whole audio file
  audio.currentTime = 0;
  audio.play(); // Play sound

  // Finding the correct key element to select based on which key was pressed, according to the keyCode
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  // Add the CSS "playing" class for visual effect
  key.classList.add("playing");
  // Select all of the keys with the class of "key"
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    // For each key, add an event listener, that listens for a transition, then executes a function which removes the "playing" class
    key.addEventListener("transitionend", function () {
      this.classList.remove("playing");
    });
  });
}

window.addEventListener("keydown", playSound);
