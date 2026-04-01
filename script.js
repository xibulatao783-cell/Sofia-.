const messages = [
  "I love you so much 💙",
  "You make me happy everyday 💜",
  "You're my favorite person 💖",
  "I miss you always 💕",
  "You are my everything 💓",
  "Forever with you 💗"
];

let musicStarted = false;

function openCard(card) {
  const index = Array.from(card.parentNode.children).indexOf(card);

  card.classList.add("active");
  card.innerHTML = messages[index];

  // Play music once
  if (!musicStarted) {
    document.getElementById("bgMusic").play();
    musicStarted = true;
  }

  // Create hearts
  for (let i = 0; i < 5; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "80vh";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}
