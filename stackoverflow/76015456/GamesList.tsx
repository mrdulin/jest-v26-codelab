import React, { useContext } from 'react';
import GameElement from './GameElement';
import { ActionType, PlayerContext, ResponseState } from './UserContext';

const GamesList = () => {
	const [data, dispatch] = useContext(PlayerContext);
	console.log('🚀 ~ file: GamesList.tsx:8 ~ GamesList ~ data:', data);
	const gameListObjects = data.games.map((game) => {
		return (
			<GameElement
				key={game.id}
				id={game.id}
				name={game.name}
				state={game.state}
				response={game.response}
				onAccept={() =>
					dispatch({ type: ActionType.Accept, payload: { tournamentId: game.id, response: ResponseState.Accepted } })
				}
				onReject={() =>
					dispatch({ type: ActionType.Reject, payload: { tournamentId: game.id, response: ResponseState.Rejected } })
				}
			/>
		);
	});
	return <div>{gameListObjects}</div>;
};

export default GamesList;
