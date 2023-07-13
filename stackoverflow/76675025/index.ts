export class CatsService {
	constructor(private readonly catRepository, private readonly clientDB) {}

	async findCat(name) {
		try {
			const result = await this.clientDB.query(name).promise();
			return result;
		} catch (error) {
			throw new Error(error);
		}
	}
}
