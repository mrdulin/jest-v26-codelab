import React from 'react';
import io, { Socket } from 'socket.io-client';

const App = () => {
  let socket: Socket;
  const ENDPOINT = 'localhost:5000';

  const join = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    socket = io(ENDPOINT);
    socket.emit('join', { name: 'Paola', room: '1' }, () => {});
  };

  return (
    <div className="join-container">
      <button className="join-button" onClick={join} data-testid={'join-button'}>
        Sign in
      </button>
    </div>
  );
};

export default App;
