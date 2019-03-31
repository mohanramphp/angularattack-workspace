import { Action } from '@ngrx/store';

import { Coin, Game } from '../../model/game.model';

export interface GameState {
    history: Array<Game>;
    xIsNext: boolean;
    winner: Coin;
    stepNumber: number;
}

export const initialGameState: GameState = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    winner: null,
    xIsNext: true
};
