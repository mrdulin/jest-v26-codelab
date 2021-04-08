import { WebClient } from '@slack/web-api';
import './main';

jest.mock('@slack/web-api', () => {
  const mSlack = {
    chat: {
      postMessage: jest.fn(),
    },
  };
  return { WebClient: jest.fn(() => mSlack) };
});

describe('test', () => {
  let slack: WebClient;
  beforeAll(() => {
    slack = new WebClient();
  });
  it('tests slack message', async () => {
    expect(slack.chat.postMessage).toBeCalledWith({ text: 'Hello world!', channel: '123' });
  });
});
