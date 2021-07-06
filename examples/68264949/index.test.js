import { Galactic } from './';

describe('68264949', () => {
  it('should cover if branch', () => {
    const galactic = new Galactic(100);
    const actual = galactic.lifeExpOnMars();
    expect(actual).toEqual(65);
  });

  it('should cover else branch', () => {
    const galactic = new Galactic(25);
    const actual = galactic.lifeExpOnMars();
    expect(actual).toEqual(75);
  });
});
