import { downloadPdfDataContent } from '.';

describe('67634069', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should pass', () => {
    const mAnchor = ({
      target: '',
      href: '',
      download: '',
      click: jest.fn(),
    } as unknown) as HTMLAnchorElement;
    const createElementSpy = jest.spyOn(document, 'createElement').mockReturnValueOnce(mAnchor);
    const appendChildSpy = jest.spyOn(document.body, 'appendChild').mockImplementation();
    const removeChildSpy = jest.spyOn(document.body, 'removeChild').mockImplementation();
    URL.revokeObjectURL = jest.fn();
    downloadPdfDataContent('teresa teng', 'example.com');
    expect(createElementSpy).toBeCalledWith('a');
    expect(appendChildSpy).toBeCalledWith(
      expect.objectContaining({
        target: 'teresa teng',
        href: 'example.com',
        download: 'teresa teng',
      })
    );
    expect(mAnchor.click).toBeCalledTimes(1);
    expect(removeChildSpy).toBeCalledWith(
      expect.objectContaining({
        target: 'teresa teng',
        href: 'example.com',
        download: 'teresa teng',
      })
    );
    expect(URL.revokeObjectURL).toBeCalledWith('example.com');
  });
});
