import React from "react";

export function Game(props) {
  const checkVictory = (e: React.MouseEvent) => {
    if (e.nativeEvent.offsetX === 400) {
      console.log('You win!');
    }
  };

  return (
    <main>
      <img src={props.src} alt="game-screen" onClick={checkVictory} />
    </main>
  );
}
