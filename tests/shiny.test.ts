import { Shiny, BetterShiny, SuperShiny } from '../src/shiny';
import { Point } from "../src/point";

// Shiny tests

test('Default constructor sets position to default Point(0,0).', () => {
    const shiny = new Shiny();
    const point = new Point();
    expect(shiny.position).toEqual(point);
});

test('Default constructor sets isConsumed to false.', () => {
    const shiny = new Shiny();
    expect(shiny.isConsumed).toBe(false);
});

test('Default constructor sets sprite value to 0.', () => {
    const shiny = new Shiny();
    expect(shiny.sprite).toBe(0);
});

test('Default constructor sets power value to 1.', () => {
    const shiny = new Shiny();
    expect(shiny.power).toBe(1);
});

test('Constructor sets position to Point(1,2).', () => {
    const point = new Point(1,2);
    const shiny = new Shiny(point);
    expect(shiny.position).toEqual(point);
});

test('Constructor sets isConsumed to false.', () => {
    const point = new Point(1,2);
    const shiny = new Shiny(point);
    expect(shiny.isConsumed).toBe(false);
});

test('Constructor sets sprite value to 0.', () => {
    const point = new Point(1,2);
    const shiny = new Shiny(point);
    expect(shiny.sprite).toBe(0);
});

test('Constructor sets power value to 1.', () => {
    const point = new Point(1,2);
    const shiny = new Shiny(point);
    expect(shiny.power).toBe(1);
});

// BetterShiny tests

test('BetterShiny default constructor sets position to default Point(0,0).', () => {
    const betterShiny = new BetterShiny();
    const point = new Point();
    expect(betterShiny.position).toEqual(point);
});

test('BetterShiny default constructor sets isConsumed to false.', () => {
    const betterShiny = new BetterShiny();
    expect(betterShiny.isConsumed).toBe(false);
});

test('BetterShiny default constructor sets sprite value to 1.', () => {
    const betterShiny = new BetterShiny();
    expect(betterShiny.sprite).toBe(1);
});

test('BetterShiny default constructor sets power value to 2.', () => {
    const betterShiny = new BetterShiny();
    expect(betterShiny.power).toBe(2);
});

test('BetterShiny constructor sets position to Point(1,2).', () => {
    const point = new Point(1,2);
    const betterShiny = new BetterShiny(point);
    expect(betterShiny.position).toEqual(point);
});

test('BetterShiny constructor sets isConsumed to false.', () => {
    const point = new Point(1,2);
    const betterShiny = new BetterShiny(point);
    expect(betterShiny.isConsumed).toBe(false);
});

test('BetterShiny constructor sets sprite value to 1.', () => {
    const point = new Point(1,2);
    const betterShiny = new BetterShiny(point);
    expect(betterShiny.sprite).toBe(1);
});

test('BetterShiny constructor sets power value to 2.', () => {
    const point = new Point(1,2);
    const betterShiny = new BetterShiny(point);
    expect(betterShiny.power).toBe(2);
});

// SuperShiny tests

test('SuperShiny default constructor sets position to default Point(0,0).', () => {
    const superShiny = new SuperShiny();
    const point = new Point();
    expect(superShiny.position).toEqual(point);
});

test('SuperShiny default constructor sets isConsumed to false.', () => {
    const superShiny = new SuperShiny();
    expect(superShiny.isConsumed).toBe(false);
});

test('SuperShiny default constructor sets sprite value to 2.', () => {
    const superShiny = new SuperShiny();
    expect(superShiny.sprite).toBe(2);
});

test('SuperShiny default constructor sets power value to 3.', () => {
    const superShiny = new SuperShiny();
    expect(superShiny.power).toBe(3);
});

test('SuperShiny constructor sets position to Point(1,2).', () => {
    const point = new Point(1,2);
    const superShiny = new SuperShiny(point);
    expect(superShiny.position).toEqual(point);
});

test('SuperShiny constructor sets isConsumed to false.', () => {
    const point = new Point(1,2);
    const superShiny = new SuperShiny(point);
    expect(superShiny.isConsumed).toBe(false);
});

test('SuperShiny constructor sets sprite value to 2.', () => {
    const point = new Point(1,2);
    const superShiny = new SuperShiny(point);
    expect(superShiny.sprite).toBe(2);
});

test('SuperShiny constructor sets power value to 3.', () => {
    const point = new Point(1,2);
    const superShiny = new SuperShiny(point);
    expect(superShiny.power).toBe(3);
});