const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(event) {
  event.stopPropagation(); // Stops Bubbling: Will no longer trigger events on the parent
}

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: false,
    once: true,
  })
);

button.addEventListener(
  "click", () => {
    console.log("Click");
  },
  {
    // This makes it so that the btton can only be clicked once
    once: true,
  }
);
