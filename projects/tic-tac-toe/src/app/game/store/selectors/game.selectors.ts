import { createSelector } from '@ngrx/store';
import { GameState } from '../state/game.state';

export const selectGame = ({ game }): GameState => game;

export const selectHistory = createSelector(
    selectGame,
    ({ history }) => history
);

export const selectXIsNext = createSelector(
    selectGame,
    ({ xIsNext }) => xIsNext
);

export const selectStepNumber = createSelector(
    selectGame,
    ({ stepNumber }) => stepNumber
);

export const selectWinner = createSelector(
    selectGame,
    ({ winner }) => winner
);

export const selectSquares = createSelector(
    selectGame,
    ({ stepNumber, history }) => history[stepNumber].squares
);

export const selectStatus = createSelector(
    selectGame,
    ({ xIsNext, winner }) => winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`
);
