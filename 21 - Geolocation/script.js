const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  (data) => {
    speed.textContent = Math.round(data.coords.speed);
    arrow.computedStyleMap.transform = `rotate(${data.coords.heading}deg)`;
  },
  (error) => {
    console.error(error);
    alert("Please click allow to use the website's functionality");
  }
);
