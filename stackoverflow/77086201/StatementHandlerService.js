class StatementHandlerService {
	constructor(statementRepo, KafkaSQSHandler, statementArray) {
		if (statementRepo === undefined || statementRepo === null) {
			throw new TypeError('StatementRepo must be defined');
		}
		if (KafkaSQSHandler === undefined || KafkaSQSHandler === null) {
			throw new TypeError('SQSHandler must be defined');
		}
		if (statementArray === undefined || statementArray === null) {
			throw new TypeError('Statement array must be defined');
		}
		this.statementRepository = statementRepo;
		this.KafkaSQSHandler = KafkaSQSHandler;
		this.statements = statementArray;
	}

	async storeAndSend() {
		let taskArray = [];
		this.statements.forEach((s) => {
			taskArray.push(this.KafkaSQSHandler.sendToKafkaSQS(s));
			taskArray.push(this.statementRepository.saveStatement(s));
		});

		return await Promise.all(taskArray);
	}
}

export default StatementHandlerService;
