import { Broker } from './broker';

export class Consumer {
	constructor(private readonly broker: Broker) {}

	public async useValue() {
		const val = await this.broker.svc.fetchValue();
		return `${val}123`;
	}
}
