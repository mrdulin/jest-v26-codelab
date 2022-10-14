import WebSocket from "ws";

export default class Socket {
  socket!: WebSocket;

  connect(url: string): void {
    if (this.socket !== undefined && this.socket.readyState === WebSocket.OPEN) {
      throw new Error("Socket is already connected");
    }
    this.socket = new WebSocket(url);
  }
}