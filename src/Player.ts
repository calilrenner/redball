import Circle from "./Circle";

export default class Player extends Circle {

  constructor(x: number, y: number, radius: number = 100, color: string = "red", context: CanvasRenderingContext2D) {
    super(x, y, radius, color, context)
  }

  draw(x: number, y: number) {
    super.draw(x, y, this.radius, this.color);
  }

  increaseSize() {
    this.radius += 5;
  }

  decreaseSize() {
    this.radius -= 5;
  }

  getRadius() {
    return this.radius;
  }
}
