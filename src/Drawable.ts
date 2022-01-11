import Game from "./Game";

export interface Drawable {
    draw(x: number, y: number, radius: number, color: string);
    updateState(game: Game);
}