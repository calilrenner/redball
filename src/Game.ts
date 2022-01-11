import { Drawable } from "./Drawable";
import Enemy from "./Enemy";
import Player from "./Player";

export default class Game {
  screenWidth: number;
  screenHeight: number;
  canvas: HTMLCanvasElement;
  window: any;
  fps: number;
  intervalId: any;
  context: CanvasRenderingContext2D;
  event: any;
  circles: Drawable[];

  constructor(screenWidth: number, screenHeight: number, canvas: HTMLCanvasElement, window) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.canvas = canvas;
    this.window = window;
    this.fps = 1000 / 60;
    this.intervalId;
    this.context;
    this.canvas;
    this.circles = [];

    this.configCanvas();
    this.configPlayers();
  }

  configPlayers() {
    this.circles.push(new Player(
      this.screenWidth / 2,
      this.screenHeight / 2,
      20,
      "red",
      this.context
    ))

    this.circles.push(new Enemy(0, 0, 10, "green", 15, 15, this.context));
    this.circles.push(new Enemy(10, 10, 10, "green", 5, 5, this.context));
    this.circles.push(new Enemy(20, 20, 10, "green", 10, 10, this.context));
  }

  configCanvas() {
    this.context = this.canvas.getContext("2d");
    this.canvas.width = this.screenWidth;
    this.canvas.height = this.screenHeight;
  }

  movePlayer(event) {
    this.event = event;
    //this.circles[0].updateState(this);
  }

  getPlayer() {
    return this.circles[0];
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  increaseDificulty() {
    this.circles.push(new Enemy(10, 0, 10, "green", 2, 2, this.context));
    //this.circles[0].increaseSize();
  }

  turn() {
    setInterval(() => {
      this.increaseDificulty();
    }, 2000);
  }

  gameLoop() {
    this.clearScreen();
    this.circles.map(circle => circle.updateState(this));
  }

  start() {
    this.intervalId = setInterval(() => {
      this.gameLoop();
    }, this.fps);
    this.turn();
  }
}
