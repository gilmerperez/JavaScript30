/* The following is a common layout you would see in an email client. When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes inbetween those two checkboxes should be checked */

const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function handleCheck(event) {
  let inBetween = false;
  // Check if user had shift key pressed down and check that they are checking it (and not un-checking it)
  if (event.shiftKey && this.checked) {
    // Loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});
