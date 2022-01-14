const rewire = require('rewire');

describe('67044925', () => {
  it('should pass', () => {
    const mod = rewire('./');
    mod.__set__('dictionary', { there: 'teresa teng' });
    const actual = mod.sayHi('there');
    expect(actual).toEqual('hello teresa teng');
  });

  it('should pass too', () => {
    const mod = rewire('./');
    mod.__set__('dictionary', { there: 'slideshowp2' });
    const actual = mod.sayHi('there');
    expect(actual).toEqual('hello slideshowp2');
  });
});
