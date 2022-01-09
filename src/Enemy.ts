import Circle from "./Circle";

export default class Enemy extends Circle {

  speedX: number;
  speedY: number;

  constructor(x: number, y: number, radius: number, color: string, speedX: number, speedY: number, context: CanvasRenderingContext2D) {
    super(x, y, radius, color, context)

    this.speedX = speedX;
    this.speedY = speedY;
  }

  draw(x: number, y: number) {
    super.draw(x, y, this.radius, this.color);
  }

  checkEnemyOutOfScreen(screenWidth: number, screenHeight: number) {
    if (this.x > screenWidth || this.x < 0) {
      this.speedX *= -1;
    }

    if (this.y > screenHeight || this.y < 0) {
      this.speedY *= -1;
    }
  }
}
