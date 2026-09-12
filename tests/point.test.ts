import '../src/point'

test('Default constructor initializes points to (0,0).', () => {
    let point: Point = new Point();
    expect(point.X).toBe(0);
    expect(point.Y).toBe(0);
});

test('Constructor initializes points to (1,2).', () => {
    let point: Point = new Point(1,2);
    expect(point.X).toBe(1);
    expect(point.Y).toBe(2);
});

test('Add correctly adds points (1,2) and (3,4) to be (4,6).', () => {
    let pointA: Point = new Point(1,2);
    let pointB: Point = new Point(3,4);
    let expected: Point = new Point(4,6);
    expect(pointA.Add(pointB)).toEqual(expected);
});

test('Add correctly adds points (1,2) and (-3,-4) to be (-2,-2).', () => {
    let pointA: Point = new Point(1,2);
    let pointB: Point = new Point(-3,-4);
    let expected: Point = new Point(-2,-2);
    expect(pointA.Add(pointB)).toEqual(expected);
});