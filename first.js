

// Set the target date
const targetDate = new Date('April 18, 2024 00:00:00');

function updateTime() {
    const currentDate = new Date();
    const timeDiff = currentDate - targetDate;

    // Calculate days, hours, minutes, and seconds
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25)); // Approximate years
    const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30)); // Approximate months
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('time').innerText = `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the time every second
setInterval(updateTime, 1000);





const emojiContainer = document.querySelector('#emoji-particle-container');

function createEmojiParticle() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji-particle');
    emoji.innerText = '💗'; // You can change this to any emoji you like
    
    // Randomize the position and animation delay for each particle
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    const randomDelay = Math.random() * 2;
    
    emoji.style.left = `${randomX}px`;
    emoji.style.top = `${randomY}px`;
    emoji.style.animationDelay = `${randomDelay}s`;

    emojiContainer.appendChild(emoji);

    // Remove the particle after its animation completes
    setTimeout(() => {
        emoji.remove();
    }, 3000); // Remove after 5 seconds
}

// Create new emoji particle every 100ms
setInterval(createEmojiParticle, 250);



const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;

// Fill the canvas with a gray "scratch" layer
ctx.fillStyle = "#999";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.globalCompositeOperation = "destination-out";

function getPosition(e) {
  const rect = canvas.getBoundingClientRect();
  const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
  const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
  return { x, y };
}

function startDrawing(e) {
  isDrawing = true;
  draw(e);
}

function endDrawing() {
  isDrawing = false;
  ctx.beginPath();
}

function draw(e) {
  if (!isDrawing) return;
  e.preventDefault();
  const pos = getPosition(e);

  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 20, 0, Math.PI * 2);
  ctx.fill();
}

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", endDrawing);
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchend", endDrawing);
canvas.addEventListener("touchmove", draw);


const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPause');
const progressFilled = document.getElementById('progressFilled');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = 'Play';
  } else {
    audio.play();
    playPauseBtn.textContent = 'Pause';
  }
  isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressFilled.style.width = progress + '%';
});

const messages = [
  "THINGS",
  "I LIKE",
  "ABOUT",
  "YOU:",
  "super caring",
  "super sweet",
  "the most beautiful girl in the world",
  "hot asf",
  "the best at bj",
  "and last but not the least",
  "loving me purely and staying by my side even in the most difficult times"
];

let currentIndex = 0;
const correctPassword = "092006";
let isAuthenticated = false;

function checkPassword() {
  const userPassword = document.getElementById("passwordInput").value;
  if (userPassword === correctPassword) {
    isAuthenticated = true;
    document.getElementById("passwordContainer").style.display = "none";
    document.getElementById("content").style.display = "block";
    showMessage(); // Optional: show first message right away
  } else {
    alert("Wrong password! Try again later 💔");
  }
}

function showMessage() {
  if (!isAuthenticated) return;
  document.getElementById('message').innerText = messages[currentIndex];
  currentIndex = (currentIndex + 1) % messages.length;
}

function showLoveLetter() {
  document.getElementById('loveLetter').style.display = 'block';
}

function showLoveLetter2() {
  document.getElementById('loveLetter2').style.display = 'block';
}
