import { appendFileSync } from 'fs';

type ILogObject = any;
export function logToTransport(logObject: ILogObject) {
  appendFileSync('monopoly_deal.log', JSON.stringify(logObject) + '\n');
}
