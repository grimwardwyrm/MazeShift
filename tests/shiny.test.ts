import { Shiny, BetterShiny, SuperShiny } from '../src/shiny';
import { Point } from "../src/point";

describe('Shiny', () => {
    describe('default constructor', () => {
        const shiny = new Shiny();
        test('sets position to default Point(0,0).', () => {
            const point = new Point();
            expect(shiny.position).toEqual(point);
        });

        test('sets isConsumed to false.', () => {
            expect(shiny.isConsumed).toBeFalsy();
        });

        test('sets sprite value to 0.', () => {
            expect(shiny.sprite).toBe(0);
        });

        test('sets power value to 1.', () => {
            expect(shiny.power).toBe(1);
        });
    });

    describe('constructor', () => {
        const point = new Point(1,2);
        const shiny = new Shiny(point);
        test('sets position to Point(1,2).', () => {
            expect(shiny.position).toEqual(point);
        });

        test('sets isConsumed to false.', () => {
            expect(shiny.isConsumed).toBeFalsy();
        });

        test('sets sprite value to 0.', () => {
            expect(shiny.sprite).toBe(0);
        });

        test('sets power value to 1.', () => {
            expect(shiny.power).toBe(1);
        });
    });
});

describe('BetterShiny', () => {
    describe('default constructor', () => {
        const betterShiny = new BetterShiny();
        test('sets position to default Point(0,0).', () => {
            const point = new Point();
            expect(betterShiny.position).toEqual(point);
        });

        test('sets isConsumed to false.', () => {
            expect(betterShiny.isConsumed).toBeFalsy();
        });

        test('sets sprite value to 1.', () => {
            expect(betterShiny.sprite).toBe(1);
        });

        test('sets power value to 2.', () => {
            expect(betterShiny.power).toBe(2);
        });
    }); 

    describe('constructor', () => {
        const point = new Point(1,2);
        const betterShiny = new BetterShiny(point);
        test('sets position to Point(1,2).', () => {
            expect(betterShiny.position).toEqual(point);
        });

        test('sets isConsumed to false.', () => {
            expect(betterShiny.isConsumed).toBeFalsy();
        });

        test('sets sprite value to 1.', () => {
            expect(betterShiny.sprite).toBe(1);
        });

        test('sets power value to 2.', () => {
            expect(betterShiny.power).toBe(2);
        });
    });
});

describe('SuperShiny', () => {
    describe('default constructor sets', () => {
        const superShiny = new SuperShiny();
        test('position to default Point(0,0).', () => {
            const point = new Point();
            expect(superShiny.position).toEqual(point);
        });

        test('isConsumed to false.', () => {
            expect(superShiny.isConsumed).toBeFalsy();
        });

        test('sprite value to 2.', () => {
            expect(superShiny.sprite).toBe(2);
        });

        test('power value to 3.', () => {
            expect(superShiny.power).toBe(3);
        });
    });

    describe('constructor sets', () => {
        const point = new Point(1,2);
        const superShiny = new SuperShiny(point);
        test('SuperShiny constructor sets position to Point(1,2).', () => {
            expect(superShiny.position).toEqual(point);
        });

        test('SuperShiny constructor sets isConsumed to false.', () => {
            expect(superShiny.isConsumed).toBeFalsy();
        });

        test('SuperShiny constructor sets sprite value to 2.', () => {
            expect(superShiny.sprite).toBe(2);
        });

        test('SuperShiny constructor sets power value to 3.', () => {
            expect(superShiny.power).toBe(3);
        });
    });
});