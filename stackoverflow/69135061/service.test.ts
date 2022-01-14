import { Blob } from 'blob-polyfill';
import { AppService } from './service';

globalThis.Blob = Blob;

describe('69135061', () => {
  test('should pass', async () => {
    const appService = new AppService();
    const app = { name: 'teresa teng', description: 'best singer' };
    const blob: Blob = appService._buildBlobForProperties(app);
    const text = await blob.text();
    expect(text).toEqual(JSON.stringify(app));
  });
});
