import axios from 'axios';

const httpClient = axios.create({
	headers: {
		common: {
			'Content-Type': 'application/json',
		},
	},
});

export async function post(url, data) {
	try {
		const response = await httpClient.post(url, data);
		return response.data;
	} catch (error) {
		console.log(error);
		throw new Error('Error in POST request');
	}
}
