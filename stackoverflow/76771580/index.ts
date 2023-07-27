import { Pool } from 'mysql2/promise';

export default class Service {
	constructor(readonly pool: Pool) {}

	async saveInfo() {
		const conn = await this.pool.getConnection();
		return conn;
	}
}
