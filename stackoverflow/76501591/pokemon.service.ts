export default class PokemonService {
	constructor() {}

	public getByName = <T>(name: string): Promise<T> => {
		return Promise.resolve('real name' as T);
	};
}
