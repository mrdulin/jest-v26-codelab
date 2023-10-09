import * as fs from 'fs/promises';
// import { promises as fs } from 'fs';
console.log(fs.readdir);

export async function calculateMetrics(directory: string, tickerSymbol: string | null = null): Promise<void> {
	await fs.readdir(directory);
}
