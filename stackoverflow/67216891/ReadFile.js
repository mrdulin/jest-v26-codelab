import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

class ReadFile {
  csvFileReader() {
    fs.createReadStream(path.resolve(__dirname, './abc.csv'))
      .pipe(csv())
      .on('data', async (row) => {
        console.log('Storing Data');
      })
      .on('end', () => {
        console.log('Done');
      });
  }
}

export default ReadFile;
