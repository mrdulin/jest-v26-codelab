import { WebClient } from '@slack/web-api';
const slack = new WebClient(process.env.SLACK_API_KEY as string);

slack.chat.postMessage({
  text: 'Hello world!',
  channel: '123',
});
