import { Drawable } from "./Drawable";
import Game from "./Game";

export default abstract class Circle implements Drawable{

  x: number;
  y: number;
  protected radius: number;
  protected color: string;
  protected context: CanvasRenderingContext2D;
  
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
    this.context.arc(x, y, radius, 0, 2 * Math.PI);
    this.context.fill();
  }

  abstract updateState(game: Game);
}
