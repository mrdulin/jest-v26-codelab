import WebSocket from "ws";
import Socket from "./socket";

describe('74062437', () => {

  test('should connect the websocket server', (done) => {
    const wss = new WebSocket.Server({ port: 0 }, () => {
      const socket = new Socket()
      socket.connect(`ws://localhost:${(wss.address() as WebSocket.AddressInfo).port}`);

      socket.socket.on('open', () => {
        expect(socket.socket.readyState).toEqual(WebSocket.OPEN);
        socket.socket.close();
      });

      socket.socket.on('close', () => wss.close(done));
    });
  });

  test('should throw error if already connected websocket server', (done) => {
    expect.assertions(2);
    const wss = new WebSocket.Server({ port: 0 }, () => {
      const socket = new Socket();
      socket.connect(`ws://localhost:${(wss.address() as WebSocket.AddressInfo).port}`);

      socket.socket.on('open', () => {
        expect(socket.socket.readyState).toEqual(WebSocket.OPEN);
        expect(() => socket.connect(`ws://localhost:${(wss.address() as WebSocket.AddressInfo).port}`)).toThrowError('Socket is already connected')
        socket.socket.close();
      });

      socket.socket.on('close', () => wss.close(done));
    });
  });
})