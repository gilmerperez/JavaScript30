const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

speed.addEventListener("mousemove", function (event) {
  const y = event.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.5;
  const max = 5;
  const height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(1) + "x";
  video.playbackRate = playbackRate;
});
