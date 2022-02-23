window.addEventListener('load', () => {
  console.log('load event triggered');
});

describe('71220140', () => {
  test('should pass', () => {
    window.dispatchEvent(new Event('load'));
  });
});
