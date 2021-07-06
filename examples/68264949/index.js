export class Galactic {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = 0; //.24 earth years
    this.venusAge = 0; //.62
    this.marsAge = 0; //1.88
    this.jupiterAge = 0; //11.86
    this.averageLife = 65;
  }
  lifeExpOnMars() {
    if (this.earthAge > this.averageLife) {
      let surpassedYears = (this.earthAge - this.averageLife) * 1.88;
      return Math.floor(surpassedYears);
    } else {
      let remainingYears = this.averageLife - this.earthAge;
      return Math.floor(remainingYears * 1.88);
    }
  }
}
