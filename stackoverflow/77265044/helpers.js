import { getData, track } from './operations';

export class Helpers {
	static async execute(request) {
		if (request) track();

		const data = await getData();
		return data.shift();
	}
}
