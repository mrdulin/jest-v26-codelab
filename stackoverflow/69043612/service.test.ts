import { CourseContentElementEmbedTweetService } from './service';

describe('69043612', () => {
  test('should pass', (done) => {
    expect.assertions(1);
    const mTwttierData = 'teresa teng';
    const mDocument = {
      defaultView: {
        twttr: {
          ready: jest.fn().mockImplementation((callback) => {
            callback(mTwttierData);
          }),
        },
      },
    };
    const service = new CourseContentElementEmbedTweetService(mDocument);
    service.loadScript().subscribe((value) => {
      expect(value).toEqual('teresa teng');
      done();
    });
  });
});
