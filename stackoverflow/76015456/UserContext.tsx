import React, { createContext, Dispatch, ReducerAction, useReducer } from 'react';

export enum ActionType {
  Accept = 'ACCEPTED',
  Reject = 'REJECTED',
}

export enum ResponseState {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
  Pending = 'PENDING',
}

export enum GameState {
  Ongoing = 'ONGOING',
  Upcoming = 'UPCOMING',
  Finished = 'FINISHED',
}

export interface IGameStatus {
  id: number;
  name: string;
  response: ResponseState;
  state: GameState;
}

export interface IPlayerResponseData {
  type: ActionType;
  payload: {
    tournamentId: number;
    response: ResponseState;
  };
}

export interface IPlayerGameData {
  playerId: number;
  games: IGameStatus[];
}

const setPlayerResponse = (state: IPlayerGameData, action: IPlayerResponseData) => {
  return state.games.map((game) =>
    game.id === action.payload.tournamentId ? { ...game, response: action.payload.response } : game
  );
};

export const PlayerTournamentResponseReducer = (state: IPlayerGameData, action: IPlayerResponseData) => {
  switch (action.type) {
    case ActionType.Accept:
      return {
        ...state,
        games: setPlayerResponse(state, action),
      };
    case ActionType.Reject:
      return {
        ...state,
        games: setPlayerResponse(state, action),
      };
    default:
      return state;
  }
};

const InitGame = (): IPlayerGameData => {
  return {
    playerId: 12345,
    games: [
      {
        id: 0,
        name: 'Game 1',
        response: ResponseState.Accepted,
        state: GameState.Ongoing,
      },
      {
        id: 1,
        name: 'Game 2',
        response: ResponseState.Pending,
        state: GameState.Ongoing,
      },
      {
        id: 2,
        name: 'Game 3',
        response: ResponseState.Pending,
        state: GameState.Ongoing,
      },
      {
        id: 3,
        name: 'Game 4',
        response: ResponseState.Pending,
        state: GameState.Upcoming,
      },
      {
        id: 4,
        name: 'Game 5',
        response: ResponseState.Pending,
        state: GameState.Upcoming,
      },
      {
        id: 5,
        name: 'Game 6',
        response: ResponseState.Rejected,
        state: GameState.Finished,
      },
      {
        id: 6,
        name: 'Game 7',
        response: ResponseState.Accepted,
        state: GameState.Finished,
      },
    ],
  };
};

const initialData: IPlayerGameData = InitGame();

export const PlayerContext = createContext<
  [IPlayerGameData, Dispatch<ReducerAction<typeof PlayerTournamentResponseReducer>>]
>([initialData, () => {}]);

export const PlayerGameDataProvider = (props: React.PropsWithChildren<{}>) => {
  const [data, dispatch] = useReducer(PlayerTournamentResponseReducer, initialData);

  return <PlayerContext.Provider value={[data, dispatch]}>{props.children}</PlayerContext.Provider>;
};
