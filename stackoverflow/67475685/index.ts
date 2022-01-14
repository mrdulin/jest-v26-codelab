import zlib from 'zlib';
import util from 'util';

const zlibGunzip = util.promisify(zlib.gunzip);

export async function unzipObjectContent(objectBody): Promise<string> {
  const buff = objectBody as Buffer;

  try {
    const data = await zlibGunzip(buff);
    const utf8String = data.toString('utf8');
    const parsedJson = JSON.parse(utf8String);

    return JSON.stringify(parsedJson);
  } catch (error) {
    console.error(`unzipObjectContent -> failed to unzip file ${error}`);
    throw error;
  }
}
