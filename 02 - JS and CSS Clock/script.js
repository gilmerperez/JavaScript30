// * Get each hand of the clock:
// Hand that counts seconds
const secondHand = document.querySelector(".second-hand");
// Hand that counts minutes
const minuteHand = document.querySelector(".minute-hand");
// Hand that counts hours
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  // Create a new variable to be able to use the Date() object
  const now = new Date();

  // Get the seconds using the Date() object
  const seconds = now.getSeconds();
  // Get each second to correspond to a specific position on the clock
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  // Change the hand to match the time
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Get the minutes using the Date() object
  const minutes = now.getMinutes();
  // Get each minute to correspond to a specific position on the clock
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  // Change the hand to match the time
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Get the hours using the Date() object
  const hours = now.getHours();
  // Get each hour to correspond to a specific position on the clock
  const hoursDegrees = ((hours / 12) * 360) + 90;
  // Change the hand to match the time
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
