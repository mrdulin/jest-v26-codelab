import path from 'path';
import request from 'supertest';
import { app } from '.';

describe('69663276', () => {
  it('Create feed (POST)', () => {
    const video = path.resolve(__dirname, `./movie_video.mp4`);
    const image = path.resolve(__dirname, `./thumbnail.jpg`);
    const pdfDoc = path.resolve(__dirname, `./pdf_doc.pdf`);

    const accessToken = '123';
    return request(app)
      .post('/feed')
      .set('content-type', 'application/octet-stream')
      .set('Authorization', 'Bearer ' + accessToken)
      .field('text', 'Aenean imperdiet. Nam ipsum risus,. Curabitur suscipit suscipit tellus.')
      .field('payment_amount', 0)
      .attach('video', video)
      .attach('image', image)
      .attach('pdfDoc', pdfDoc)
      .expect(200);
  });
});
