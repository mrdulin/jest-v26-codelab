import { Abc } from './some-module';

export async function main() {
	const abc = new Abc();
	return abc.methodOne().then((res) => res.message.content);
}
