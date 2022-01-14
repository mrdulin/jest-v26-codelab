import fetch from 'node-fetch';

export class MyClass {
  async postEvent(event) {
    const headers = {
      'Content-type': 'application/json',
      'Api-Key': 'APIKEY',
    };

    const response = await fetch('url', {
      method: 'POST',
      body: event,
      headers: headers,
    });
    return response.json();
  }
}
