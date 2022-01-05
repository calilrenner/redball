const canvas = document.querySelector("#canvas");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const context = canvas.getContext("2d");

let gameLoopId;

canvas.width = screenWidth;
canvas.height = screenHeight;

let player = {
  x: screenWidth / 2,
  y: screenHeight / 2,
  radius: 40,
  color: "red",
};

let enemy = {
  x: 200,
  y: 200,
  radius: 50,
  color: "green",
  speedX: 5,
  speedY: 5,
};

function drawPlayer() {
  drawCircle(player.x, player.y, player.radius, player.color);
}

function drawEnemy() {
  drawCircle(enemy.x, enemy.y, enemy.radius, enemy.color);
}

function drawCircle(x, y, radius, color) {
  context.beginPath();
  context.fillStyle = color;
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fill();
}

function movePlayer(event) {
  player.x = event.clientX;
  player.y = event.clientY;
}

function moveEnemy() {
  enemy.x += enemy.speedX;
  enemy.y += enemy.speedY;
}

function checkEnemyOutOfScreen() {
  if (enemy.x > screenWidth || enemy.x < 0) {
    enemy.speedX *= -1;
  }
  if (enemy.y > screenHeight || enemy.y < 0) {
    enemy.speedY *= -1;
  }
}

function checkColision() {
  const dist = Math.sqrt((player.x - enemy.x) ** 2 + (player.y - enemy.y) ** 2);
  console.log(dist);
  if (dist <= player.radius + enemy.radius) {
    alert("DEU RUIM");
    clearScreen();
    clearInterval(gameLoopId);
  }
}

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
  clearScreen();
  drawPlayer();
  drawEnemy();
  moveEnemy();
  checkEnemyOutOfScreen();
  checkColision();
}

gameLoopId = setInterval(() => {
  gameLoop();
}, 1000 / 120);
