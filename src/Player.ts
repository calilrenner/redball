import Circle from "./Circle";
import Game from "./Game";
import Square from "./Square";

export default class Player extends Square {

  constructor(x: number, y: number, radius: number = 100, color: string = "red", context: CanvasRenderingContext2D) {
    super(x, y, radius, color, context)
  }

  draw() {
    super.draw(this.x, this.y, this.radius, this.color);
  }

  updateState(game: Game) {
    this.move(game.event);
    this.draw();
  }

    move(event) {
    this.x = event.clientX;
    this.y = event.clientY;
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
