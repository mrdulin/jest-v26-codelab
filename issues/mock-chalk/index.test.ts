import { main } from './';
import chalk from 'chalk';

// work
// jest.mock('chalk', () => {
//   return { green: jest.fn() };
// });

describe('chalk', () => {
  // work too
  it('should pass', () => {
    const greenMock = jest.fn();
    Object.defineProperty(chalk, 'green', {
      value: greenMock,
    });
    main();
    expect(greenMock).toBeCalledWith('create');
  });
  // not work
  //   it('should pass', () => {
  //     const chalkGreenSpy = jest.spyOn(chalk, 'green', 'get').mockReturnValue('1');
  //     main();
  //     expect(chalkGreenSpy).toBeCalledWith('create');
  //   });
});
