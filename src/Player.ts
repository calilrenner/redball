import Circle from "./Circle";

export default class Player {

  x: number;
  y: number;
  radius: number;
  color: string;
  context: CanvasRenderingContext2D;
  circle: Circle;

  constructor(initX: number, intitY: number, radius: number = 100, color:string = "red", context: CanvasRenderingContext2D) {
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

  draw(x: number, y: number) {
    this.circle.draw(x, y, this.radius, this.color);
  }

  increaseSize() {
    this.radius += 5;
  }

  decreaseSize() {
    this.radius -= 5;
  }
}
