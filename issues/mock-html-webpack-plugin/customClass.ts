export default class Custom {
  constructor() {
    // https://stackoverflow.com/questions/27980996/return-a-value-other-than-the-class-in-es6
    return 'real custom class';
  }
}

const a = new Custom();

console.log(a);
console.log(a.toString());
