class Circle {
  constructor(x, y, radius, color, context) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.context = context;
  }

  draw(x, y, radius, color) {
    this.context.beginPath();
    this.context.fillStyle = color;
    this.context.arc(x, y, radius, 0, 2 * Math.PI);
    this.context.fill();
  }
}
