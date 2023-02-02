import stream from 'stream';
import fs from 'fs';
import { promisify } from 'util';
import axios from 'axios';

const filepath = 'archive.tar';
const finished = promisify(stream.finished);
const writer = fs.createWriteStream(filepath);

export function download() {
  return axios({
    method: 'get',
    url: '/api/download',
    responseType: 'stream', // Make the response a stream
  })
    .then(async (response) => {
      console.log('response: ', response);
      response.data.pipe(writer); // Send the response stream to the writable file stream
      await finished(writer); // Watch the stream for being finished/any errors
    })
    .catch((error) => {
      console.error('Image Download');
      console.error(error);
      process.exit(1);
    });
}
