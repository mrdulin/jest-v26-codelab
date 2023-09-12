import StatementRepository from './StatementRepository';
import SQSKafkaHandler from './SQSKafkaHandler';

import StatementHandlerService from './StatementHandlerService';

jest.mock('./SQSKafkaHandler'); //Auto-mock the modules
jest.mock('./StatementRepository');

describe('StatementHandlerService', () => {
	it('should work', async () => {
		const mockMethod = jest.fn((s) => []);
		SQSKafkaHandler.mockImplementation(() => {
			return {
				sendToKafkaSQS: mockMethod,
			};
		});
		StatementRepository.mockImplementation(() => {
			return {
				saveStatement: mockMethod,
			};
		});
		const sqs = new SQSKafkaHandler(); //Auto-mocked instances .
		const repo = new StatementRepository();

		const serviceUnderTest = new StatementHandlerService(repo, sqs, ['stmnt1', 'stmnt2']);
		await serviceUnderTest.storeAndSend();
	});
});
