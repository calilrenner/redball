class Player {
  constructor(initX, intitY, radius = 100, color = "red", context) {
    this.x = initX;
    this.y = intitY;
    this.radius = radius;
    this.color = color;
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

  increaseSize() {
    this.radius += 5;
  }

  decreaseSize() {
    this.radius -= 5;
  }
}
