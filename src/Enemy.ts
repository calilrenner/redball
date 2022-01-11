import Circle from "./Circle";
import Game from "./Game";

export default class Enemy extends Circle {

  speedX: number;
  speedY: number;

  constructor(x: number, y: number, radius: number, color: string, speedX: number, speedY: number, context: CanvasRenderingContext2D) {
    super(x, y, radius, color, context)

    this.speedX = speedX;
    this.speedY = speedY;
  }

  draw() {
    super.draw(this.x, this.y, this.radius, this.color);
  }

  updateState(game: Game) {
    this.move();
    this.checkEnemyOutOfScreen(game.screenWidth, game.screenHeight);
    this.checkColision(game);
    this.draw();
  }

  move() {
      this.x += this.speedX;
      this.y += this.speedY;
  }

  checkEnemyOutOfScreen(screenWidth: number, screenHeight: number) {
    if (this.x > screenWidth || this.x < 0) {
      this.speedX *= -1;
    }

    if (this.y > screenHeight || this.y < 0) {
      this.speedY *= -1;
    }
  }

    checkColision(game) {
    const dist = Math.sqrt(
      (game.getPlayer().x - this.x) ** 2 + (game.getPlayer().y - this.y) ** 2
    );

    if (dist <= game.getPlayer().getRadius() + this.radius) {
      alert("DEU RUIM");
      game.clearScreen();
      clearInterval(game.intervalId);

    game.window.location.reload();
    }
    }
}
