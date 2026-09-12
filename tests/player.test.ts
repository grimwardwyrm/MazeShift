import { Player } from "../src/player";
import { Point } from "../src/point";

test('Constructor defaults position to (0,0)', () => {
    const player = new Player('Player1', 0);
    const point = new Point();
    expect(player.position).toEqual(point);
});

test('Constructor sets position to (1,2)', () => {
    const point = new Point(1,2);
    const player = new Player('Player1', 0, point);
    expect(player.position).toEqual(point);
});

test('Constructor sets name to Player1', () => {
    const point = new Point(1,2);
    const player = new Player('Player1', 0, point);
    expect(player.name).toBe('Player1');
});

test('Constructor sets score to 0', () => {
    const point = new Point(1,2);
    const player = new Player('Player1', 0, point);
    expect(player.score).toBe(0);
});

test('Constructor sets maxScore to 0', () => {
    const point = new Point(1,2);
    const player = new Player('Player1', 0, point);
    expect(player.maxScore).toBe(0);
});

test('Constructor sets sprite to 1', () => {
    const point = new Point(1,2);
    const player = new Player('Player1', 1, point);
    expect(player.sprite).toBe(1);
});

test('Constructor clamps negative sprite value to 0.', () => {
    const point = new Point(1,2);
    const player = new Player('Player1', -5, point);
    expect(player.sprite).toBe(0);
});

test('Constructor sets isDead to false.', () => {
    const point = new Point(1,2);
    const player = new Player('Player1', 0, point);
    expect(player.isDead).toBe(false);
});