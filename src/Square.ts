import { Drawable } from "./Drawable";
import Game from "./Game";

export default abstract class Square implements Drawable {

    x;
    y;
    radius;
    color;
    context;

      constructor(x: number, y: number, radius: number, color: string, context: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.context = context;
  }
    draw(x: number, y: number, radius: number, color: string) {
            this.context.beginPath();
    this.context.fillStyle = color;
    this.context.rect(x, y, 100, 100);
    this.context.fill();
    }
    abstract updateState(game: Game);
}