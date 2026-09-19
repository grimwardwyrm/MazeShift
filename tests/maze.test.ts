import "../src/maze";
import { generateShinies, mazeOriginal, mazeShifter } from "../src/maze";

describe('generateShinies', () => {
    test('returns 7x8 map when given a 7x8 map.', () => {
        const sevenbyseven = [
            [0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 5, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
        ];
        
        const result = generateShinies(sevenbyseven);
        
        expect(result.length).toBe(7);
        for (let i = 0; i < result.length; i++) {
            expect(result[i].length).toBe(8);
        }
    });

    test('generates shinies on a given map.', () => {
        const maze = generateShinies(mazeOriginal);
        let hasShiny = false;
        for (let i = 0; i < maze.length; i++) {
            for (let j = 0; j < maze[i].length; i++) {
                if (maze[i][j] == 2, 3, 4) { 
                    hasShiny = true;
                    break;
                }
            }
        }
        expect(hasShiny).toBeTruthy;
    });

    test('only replaces 0\'s on a given map.', () => {
        const maze = generateShinies(mazeOriginal);
        
        for (let i = 0; i < mazeOriginal.length; i++) {
            for (let j = 0; j < mazeOriginal[i].length; i++) {
                let node = mazeOriginal[i][j];

                if (node > 0) {
                    expect(maze[i][j]).toBe(node);
                }
            }
        }
    });
});

describe('mazeShifter', () => {
    test('does not generate a maze equal to the current maze.', () => {
        const maze = mazeOriginal;
        const newMaze = mazeShifter(maze);
        expect(newMaze).not.toEqual(maze);
    });

    test('ensures a path to at least one shiny.', () => {
        // TODO: BFS algo
    });
});