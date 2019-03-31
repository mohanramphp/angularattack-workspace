import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GameState } from '../state/game.state';

export const selectGameFeature = createFeatureSelector<any, { game: GameState }>('gameFeature');


export const selectGame = createSelector(
    selectGameFeature,
    ({ game }) => game
);

export const selectHistory = createSelector(
    selectGame,
    ({ history }) => history
);

export const selectStepNumber = createSelector(
    selectGame,
    ({ stepNumber }) => stepNumber
);

export const selectStopPlay = createSelector(
    selectGame,
    ({ winner }) => !!winner
);

export const selectSquares = createSelector(
    selectGame,
    ({ stepNumber, history }) => history[stepNumber].squares
);

export const selectStatus = createSelector(
    selectGame,
    ({ xIsNext, winner }) => winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`
);
