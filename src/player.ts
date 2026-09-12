import { Point } from "../src/point";

/**
 * Represents a Player in the game.
 * Holds the name, position, score, max score, sprite, and if the player is dead.
 */
export class Player {
    public position: Point;
    public name: string;
    public isDead: boolean;
    public score: number;
    public maxScore: number;
    public sprite: number; 

    constructor(name: string, sprite: number);
    constructor(name: string, sprite: number, position?: Point);
    /**
     * Creates a Player.
     * @param name The name of the Player.
     * @param sprite The number of the sprite. Sprite number determines which
     * stored sprite to use as the player's visuals. A negative value clamps to 0.
     * @param position Where the Player exists in the game.
     */
    constructor(name: string, sprite: number, position?: Point) {
        this.name = name;
        if (sprite < 0) {
            sprite = 0;
        }
        this.sprite = sprite;
        this.isDead = false;
        this.score = 0;
        this.maxScore = this.score;
        
        if (position) {
            this.position = position;
        } else {
            this.position = new Point();
        }
    }
}