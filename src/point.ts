/** Represents a 2D cartesian point. */
export class Point {
    public x: number;
    public y: number;

    constructor();
    constructor(x: number, y: number);
    /**
     * Defaults x and y to 0 if no values are given.
     * @param x The x value of the point.
     * @param y The y value of the point.
     */
    constructor(x?: number, y?: number) {
        if (x && y) {
            this.x = x;
            this.y = y;
        } else {
            this.x = 0;
            this.y = 0;
        }
    }

    /** 
     * Adds this point and pointB using their corresponding x and y values. 
     * @param pointB The second point to add.
    */
    Add(pointB: Point): Point {
        const xValue = this.x + pointB.x;
        const yValue = this.y + pointB.y;
        return new Point(xValue, yValue);
    }
}