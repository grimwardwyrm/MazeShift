/** 
 * Map format is:
 * 0 = empty (floor)
 * 1 = wall
 * 2 = Shiny
 * 3 = BetterShiny
 * 4 = SuperShiny
 * 5 = player
 */

/** Preset 5x7 maze maps */
export const mazeOriginal = [
    [0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 1, 0, 5, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0],
];
export const mazeEmpty = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 5, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];
export const mazeOneWall = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 5, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

/**
 * Takes a given maze and randomly generates shinies in floor (0) spaces.
 */
export function generateShinies<const T extends number[][]>(maze: T): T {
    // TODO
    return maze;
}

/**
 * Generates a shifted maze based on the given maze.
 * Ensures there is always a path to at least one of
 * the shinies.
 * @param maze 
 */
export function mazeShifter<const T extends number[][]>(maze: T): T {
    // TODO
    return maze;
}