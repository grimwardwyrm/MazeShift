import { Point } from "../src/point";

/** 
 * Represents a powerup. 
 * Holds a positon, sprite, power, and if it has been consumed (destroyed).
 * */
export class Shiny {
    public position: Point;
    public isConsumed: boolean;
    public sprite: number;
    public power: number;

    constructor();
    constructor(position: Point);
    /**
     * Creates a Shiny; sets isConsumed to false, sprite to 0, and 
     * power to 1.
     * @param position Where the Shiny exists in the game.
     */
    constructor(position?: Point) {
        if (position) {
            this.position = position;
        } else {
            this.position = new Point(0,0);
        }
        this.isConsumed = false;
        this.sprite = 0;
        this.power = 1;
    }
}

/** 
 * A slightly upgraded version of the powerup, with more power.
 * */
export class BetterShiny extends Shiny {
    constructor();
    constructor(position: Point);
    /**
     * Creates a BetterShiny; sets isConsumed to false, sprite to 1, and 
     * power to 2.
     * @param position Where the BetterShiny exists in the game.
     */
    constructor(position?: Point) {
        super();
        if (position) {
            this.position = position;
        } else {
            this.position = new Point(0,0);
        }
        this.isConsumed = false;
        this.sprite = 1;
        this.power = 2;
    }
}

/** 
 * A fully upgraded version of the powerup, with the most power.
 * */
export class SuperShiny extends Shiny {
    constructor();
    constructor(position: Point);
    /**
     * Creates a SuperShiny; sets isConsumed to false, sprite to 2, and 
     * power to 3.
     * @param position Where the SuperShiny exists in the game.
     */
    constructor(position?: Point) {
        super();
        if (position) {
            this.position = position;
        } else {
            this.position = new Point();
        }
        this.isConsumed = false;
        this.sprite = 2;
        this.power = 3;
    }
}