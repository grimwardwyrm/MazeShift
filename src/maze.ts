/** 
 * Map format is:
 * 0 = empty
 * 1 = wall
 * 2 = shiny
 * 3 = player
 */

/** Preset 5x7 maze maps */
const mazeOriginal = [
    [0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 1, 0, 3, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0],
];
const mazeEmpty = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];
const mazeOneWall = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

/**
 * Takes a given maze and randomly generates
 * which empty spaces will have shinies
 */
function generateShinies(maze: number[][]) {

}

/**
 * Generates a shifted maze based on the given maze.
 * Ensures there is always a path to at least one of
 * the shinies.
 * @param maze 
 */
function mazeShifter(maze: number[][]) {
}