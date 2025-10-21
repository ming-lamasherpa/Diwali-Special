// Fade in the card (light up effect)
window.addEventListener("load", () => {
  document.querySelector(".card").classList.add("show");
});

// Floating sparkles animation
const sparkleContainer = document.querySelector(".sparkle");

function createSparkle() {
  const sparkle = document.createElement("span");
  sparkle.style.left = Math.random() * 300 + "px";
  sparkle.style.animationDuration = 2 + Math.random() * 2 + "s";
  sparkleContainer.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 3000);
}

// Start sparkles after diya lights up
setTimeout(() => {
  setInterval(createSparkle, 200);
}, 3000);
