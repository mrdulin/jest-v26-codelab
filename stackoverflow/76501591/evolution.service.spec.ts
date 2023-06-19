import EvolutionService from './evolution.service';
import PokemonService from './pokemon.service';

jest.mock('./pokemon.service');

const PokemonServiceMock = PokemonService as jest.MockedClass<typeof PokemonService>;

test('good response', async () => {
	const evolutionService = new EvolutionService();
	const pokemonServiceInstance = PokemonServiceMock.mock.instances[0];
	pokemonServiceInstance.getByName = jest.fn().mockResolvedValue('fake name');
	const actual = await evolutionService.chainByName('eevee');
	expect(pokemonServiceInstance.getByName).toHaveBeenCalled();
	expect(actual).toBe('fake name');
});
