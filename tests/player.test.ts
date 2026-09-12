import { Player } from "../src/player";
import { Point } from "../src/point";

describe('Constructor', () => {
    test('defaults position to (0,0).', () => {
        const player = new Player('Player1', 0);
        const point = new Point();
        expect(player.position).toEqual(point);
    });

    const point = new Point(1,2);
    test('sets position to (1,2).', () => {
        const player = new Player('Player1', 0, point);
        expect(player.position).toEqual(point);
    });

    test('sets name to Player1.', () => {
        const player = new Player('Player1', 0, point);
        expect(player.name).toBe('Player1');
    });

    test('sets score to 0.', () => {
        const player = new Player('Player1', 0, point);
        expect(player.score).toBe(0);
    });

    test('sets maxScore to 0.', () => {
        const player = new Player('Player1', 0, point);
        expect(player.maxScore).toBe(0);
    });

    test('sets sprite to 1.', () => {
        const player = new Player('Player1', 1, point);
        expect(player.sprite).toBe(1);
    });

    test('clamps negative sprite value to 0.', () => {
        const player = new Player('Player1', -5, point);
        expect(player.sprite).toBe(0);
    });

    test('sets isDead to false.', () => {
        const player = new Player('Player1', 0, point);
        expect(player.isDead).toBeFalsy();
    });
});