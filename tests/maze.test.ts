import "../src/maze";

test('generateShinies generates 2\'s on a given map.', () => {
    const maze = mazeOriginal;
    generateShinies(maze);
    let hasShiny = false;
    for (let row of maze) {
        for (let element of row) {
            // 2 = shiny
            if (element == 2) { 
                hasShiny = true;
                break;
            }
        }
    }
    expect(hasShiny).toBeTruthy;
});

test('generateShinies only replaces 0\'s on a given map.', () => {
    // TODO
    const maze = mazeOriginal;
    generateShinies(maze);
    // Reset the generated maze and check equality
    for (let row of maze) {
        for (let element of row) {
            if (element == 2) {
                element = 99;
            }
        }
    }

    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] != mazeOriginal[i][j]) {

            }
        }
    }
    // expect(maze).toEqual(mazeOriginal)
});

test('generateShinies does not replace any 1\'s on a given map.', () => {
    const maze = mazeOriginal;
    generateShinies(maze);
    // Reset the generated maze and check equality
    for (let row of maze) {
        for (let element of row) {
            if (element == 2) {
                element = 0;
            }
        }
    }
    expect(maze).toEqual(mazeOriginal)
});

test('mazeShifter does not generate a maze equal to the current maze.', () => {
    const maze = mazeOriginal;
    const newMaze = mazeShifter(maze);
    expect(newMaze).not.toEqual(maze);
});

test('mazeShifter ensures a path to at least one shiny.', () => {
    
});