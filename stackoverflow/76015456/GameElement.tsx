import React from 'react';

export type GameElementProps = {
  id: number;
  name: string;
  state: string;
  response: string;
  onAccept(): void;
  onReject(): void;
};
const GameElement = (props: GameElementProps) => {
  return (
    <div>
      <ul>
        <dt>GameID: {props.id}</dt>
        <dt>Game Name: {props.name}</dt>
        <dt>Game Status: {props.state}</dt>
        <dt>Player Response: {props.response}</dt>
        <dt>
          <button onClick={props.onAccept}>Accept</button>
          <button onClick={props.onReject}>Reject</button>
        </dt>
      </ul>
    </div>
  );
};

export default GameElement;
