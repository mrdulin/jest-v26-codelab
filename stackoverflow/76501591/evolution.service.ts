import PokemonService from './pokemon.service';

export default class EvolutionService {
	private pokemonService: PokemonService;
	constructor() {
		this.pokemonService = new PokemonService();
	}

	public chainByName = async (name: string) => {
		const pokemon = await this.pokemonService.getByName(name);
		return pokemon;
	};
}
