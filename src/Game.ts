import Enemy from "./Enemy";
import Player from "./Player";

export default class Game {
  screenWidth: number;
  screenHeight: number;
  canvas: HTMLCanvasElement;
  window: any;
  fps: number;
  intervalId: any;
  player: Player;
  enemies: Enemy[];
  context: CanvasRenderingContext2D;

  constructor(screenWidth: number, screenHeight: number, canvas: HTMLCanvasElement, window) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.canvas = canvas;
    this.window = window;
    this.fps = 1000 / 60;
    this.intervalId;
    this.player;
    this.enemies;
    this.context;
    this.canvas;

    this.configCanvas();
    this.configPlayers();
  }

  configPlayers() {
    this.player = new Player(
      this.screenWidth / 2,
      this.screenHeight / 2,
      20,
      "red",
      this.context
    );
    this.enemies = [
      new Enemy(0, 0, 10, "green", 15, 15, this.context),
      new Enemy(10, 10, 10, "green", 5, 5, this.context),
      new Enemy(20, 20, 10, "green", 10, 10, this.context),
    ];
  }

  configCanvas() {
    this.context = this.canvas.getContext("2d");
    this.canvas.width = this.screenWidth;
    this.canvas.height = this.screenHeight;
  }

  movePlayer(event) {
    this.player.x = event.clientX;
    this.player.y = event.clientY;
  }

  moveEnemy() {
    this.enemies.map((enemy) => {
      enemy.x += enemy.speedX;
      enemy.y += enemy.speedY;

      enemy.draw(enemy.x, enemy.y);
      enemy.checkEnemyOutOfScreen(this.screenWidth, this.screenHeight);
      this.checkColision(enemy);
    });
  }

  checkColision(enemy) {
    const dist = Math.sqrt(
      (this.player.x - enemy.x) ** 2 + (this.player.y - enemy.y) ** 2
    );

    if (dist <= this.player.radius + enemy.radius) {
      alert("DEU RUIM");
      this.clearScreen();
      clearInterval(this.intervalId);
      this.enemies = [];

      this.window.location.reload();
    }
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  increaseDificulty() {
    this.enemies.push(new Enemy(10, 0, 10, "green", 2, 2, this.context));
    this.player.increaseSize();
  }

  turn() {
    setInterval(() => {
      this.increaseDificulty();
    }, 2000);
  }

  gameLoop() {
    this.clearScreen();
    this.player.draw(this.player.x, this.player.y);
    this.moveEnemy();
  }

  start() {
    this.intervalId = setInterval(() => {
      this.gameLoop();
    }, this.fps);
    this.turn();
  }
}
