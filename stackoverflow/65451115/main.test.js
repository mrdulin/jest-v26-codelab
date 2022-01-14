import main from './main';

describe('65451115', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should pass', () => {
    const createElementSpy = jest.spyOn(document, 'createElement').mockReturnValue('fake p');
    const appendChildSpy = jest.spyOn(document.body, 'appendChild').mockReturnValue();
    const addEventListenerSpy = jest
      .spyOn(window.document, 'addEventListener')
      .mockImplementationOnce((event, handler) => {
        handler();
      });
    main();
    expect(addEventListenerSpy).toBeCalledWith('click', expect.any(Function));
    expect(createElementSpy).toBeCalledWith('p');
    expect(appendChildSpy).toBeCalledWith('fake p');
  });
});
