import { LoadersType } from './getLoaders';

export async function processAddress(id: number, loaders: LoadersType) {
	const Address = await loaders.addressById.load(id);
	return Address.name;
}
