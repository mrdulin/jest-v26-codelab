import DataLoader from 'dataloader';

export type EntityManager = any;

export type LoadersType = ReturnType<typeof getLoaders>;

export function getLoaders(em: EntityManager) {
	return {
		addressById: new DataLoader(async (ids) => ids.map((id) => ({ name: 'test', id }))),
	};
}
