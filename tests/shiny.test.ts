import '../src/shiny'

// Shiny tests

test('Default constructor sets point to default Point(0,0).', () => {
    let shiny: Shiny = new Shiny();
    let point: Point = new Point();
    expect(shiny.position).toEqual(point);
});

test('Default constructor sets isConsumed to false.', () => {
    let shiny: Shiny = new Shiny();
    expect(shiny.isConsumed).toBe(false);
});

test('Default constructor sets sprite value to 0.', () => {
    let shiny: Shiny = new Shiny();
    expect(shiny.sprite).toBe(0);
});

test('Default constructor sets power value to 1.', () => {
    let shiny: Shiny = new Shiny();
    expect(shiny.power).toBe(1);
});

test('Constructor sets point to Point(1,2).', () => {
    let point: Point = new Point(1,2);
    let shiny: Shiny = new Shiny(point);
    expect(shiny.position).toEqual(point);
});

test('Constructor sets isConsumed to false.', () => {
    let point: Point = new Point(1,2);
    let shiny: Shiny = new Shiny(point);
    expect(shiny.isConsumed).toBe(false);
});

test('Constructor sets sprite value to 0.', () => {
    let point: Point = new Point(1,2);
    let shiny: Shiny = new Shiny(point);
    expect(shiny.sprite).toBe(0);
});

test('Constructor sets power value to 1.', () => {
    let point: Point = new Point(1,2);
    let shiny: Shiny = new Shiny(point);
    expect(shiny.power).toBe(1);
});

// BetterShiny tests

test('BetterShiny default constructor sets point to default Point(0,0).', () => {
    let betterShiny: Shiny = new Shiny();
    let point: Point = new Point();
    expect(betterShiny.position).toEqual(point);
});

test('BetterShiny default constructor sets isConsumed to false.', () => {
    let betterShiny: BetterShiny = new BetterShiny();
    expect(betterShiny.isConsumed).toBe(false);
});

test('BetterShiny default constructor sets sprite value to 1.', () => {
    let betterShiny: BetterShiny = new BetterShiny();
    expect(betterShiny.sprite).toBe(1);
});

test('BetterShiny default constructor sets power value to 2.', () => {
    let betterShiny: BetterShiny = new BetterShiny();
    expect(betterShiny.power).toBe(2);
});

test('BetterShiny constructor sets point to Point(1,2).', () => {
    let point: Point = new Point(1,2);
    let betterShiny: BetterShiny = new BetterShiny(point);
    expect(betterShiny.position).toEqual(point);
});

test('BetterShiny constructor sets isConsumed to false.', () => {
    let point: Point = new Point(1,2);
    let betterShiny: BetterShiny = new BetterShiny(point);
    expect(betterShiny.isConsumed).toBe(false);
});

test('BetterShiny constructor sets sprite value to 1.', () => {
    let point: Point = new Point(1,2);
    let betterShiny: BetterShiny = new BetterShiny(point);
    expect(betterShiny.sprite).toBe(1);
});

test('BetterShiny constructor sets power value to 2.', () => {
    let point: Point = new Point(1,2);
    let betterShiny: BetterShiny = new BetterShiny(point);
    expect(betterShiny.power).toBe(2);
});

// SuperShiny tests

test('SuperShiny default constructor sets point to default Point(0,0).', () => {
    let superShiny: SuperShiny = new SuperShiny();
    let point: Point = new Point();
    expect(superShiny.position).toEqual(point);
});

test('SuperShiny default constructor sets isConsumed to false.', () => {
    let superShiny: SuperShiny = new SuperShiny();
    expect(superShiny.isConsumed).toBe(false);
});

test('SuperShiny default constructor sets sprite value to 2.', () => {
    let superShiny: SuperShiny = new SuperShiny();
    expect(superShiny.sprite).toBe(2);
});

test('SuperShiny default constructor sets power value to 3.', () => {
    let superShiny: SuperShiny = new SuperShiny();
    expect(superShiny.power).toBe(3);
});

test('SuperShiny constructor sets point to Point(1,2).', () => {
    let point: Point = new Point(1,2);
    let superShiny: SuperShiny = new SuperShiny(point);
    expect(superShiny.position).toEqual(point);
});

test('SuperShiny constructor sets isConsumed to false.', () => {
    let point: Point = new Point(1,2);
    let superShiny: SuperShiny = new SuperShiny(point);
    expect(superShiny.isConsumed).toBe(false);
});

test('SuperShiny constructor sets sprite value to 2.', () => {
    let point: Point = new Point(1,2);
    let superShiny: SuperShiny = new SuperShiny(point);
    expect(superShiny.sprite).toBe(2);
});

test('SuperShiny constructor sets power value to 3.', () => {
    let point: Point = new Point(1,2);
    let superShiny: SuperShiny = new SuperShiny(point);
    expect(superShiny.power).toBe(3);
});