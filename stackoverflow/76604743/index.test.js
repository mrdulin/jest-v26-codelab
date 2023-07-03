const ImageManipulator = require('./');

const mockSharpInstance = {
	default: jest.fn().mockReturnThis(),
	resize: jest.fn().mockReturnThis(),
	toBuffer: jest.fn().mockReturnThis(),
};

jest.mock('sharp', () => jest.fn(() => mockSharpInstance));

describe('76604743', () => {
	test('should pass', () => {
		const imageManipulator = new ImageManipulator('fake body');
		mockSharpInstance.resize.mockResolvedValueOnce('fake response');

		imageManipulator.applyResizingOptions(100, 100);
		expect(mockSharpInstance.resize).toBeCalledWith({ width: 100, height: 100 });
	});
});
