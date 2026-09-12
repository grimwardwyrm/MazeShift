import { Point } from '../src/point';

describe('Default constructor', () => {
    const point = new Point();
    test('sets x to be 0.', () => {
        expect(point.x).toBe(0);
    });
    test('sets y to be 0.', () => {
        expect(point.y).toBe(0);
    });
});

describe('Constructor', () => {
    const point = new Point(1,2);
    test('sets x to be 1.', () => {
        expect(point.x).toBe(1);
    });
    test('sets y to be 2.', () => {
        expect(point.y).toBe(2);
    });
});

test('Add correctly adds points (1,2) and (3,4) to be (4,6).', () => {
    const pointA = new Point(1,2);
    const pointB = new Point(3,4);
    const expected = new Point(4,6);
    expect(pointA.Add(pointB)).toEqual(expected);
});

test('Add correctly adds points (1,2) and (-3,-4) to be (-2,-2).', () => {
    const pointA = new Point(1,2);
    const pointB = new Point(-3,-4);
    const expected = new Point(-2,-2);
    expect(pointA.Add(pointB)).toEqual(expected);
});