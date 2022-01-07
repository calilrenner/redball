class Enemy {
  constructor(x, y, radius, color, speedX, speedY, context) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
    this.context = context;

    this.circle = new Circle(
      this.x,
      this.y,
      this.radius,
      this.color,
      this.context
    );
  }

  draw(x, y) {
    this.circle.draw(x, y, this.radius, this.color);
  }

  checkEnemyOutOfScreen(screenWidth, screenHeight) {
    if (this.x > screenWidth || this.x < 0) {
      this.speedX *= -1;
    }

    if (this.y > screenHeight || this.y < 0) {
      this.speedY *= -1;
    }
  }
}
