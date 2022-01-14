import * as fs from 'fs';

export class MainFunction {
  async demo(): Promise<any> {
    const fileName = 'C:/Users/Desktop/testing-file-dir/';
    const fileName1 = '/destination/';
    let filefound = (await fs.promises.stat(fileName)).isFile();
    await fs.promises.copyFile(fileName, fileName1);
    console.log(filefound, 'inside actual code');
    return Promise.resolve(true);
  }
}
