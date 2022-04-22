import { Processor } from './processor';

export const execute = (event, context) => {
  const records = event.Records;

  records.map(async (record) => {
    return await processRecord(record.body.info);
  });

  async function processRecord(info) {
    try {
      console.log('before process');
      await Processor.process(info);
      console.log('after process');
    } catch (e) {
      throw new Error('Processing error');
    }
  }
};
