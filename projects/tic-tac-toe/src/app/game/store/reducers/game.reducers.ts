import { GameActions, GameAction } from '../actions/game.actions';
import { GameState, initialGameState } from '../state/game.state';
import { calculateWinner, handleCoinPlacement } from '../helpers/game.helpers';

export function gameReducers(
    state: GameState = initialGameState, action: GameActions
): GameState {
    switch (action.type) {

        case GameAction.Reset: {
            return { ...initialGameState };
        }

        case GameAction.CalculateWinner: {
            return {
                ...state,
                winner: calculateWinner(action.payload.squares)
            };
        }

        case GameAction.HandleCoinPlacement: {
            const gameState = handleCoinPlacement(state, action.payload.index);
            return {
                ...state,
                ...gameState
            };
        }

        case GameAction.JumpTo: {

            const { payload: { index: step } } = action;
            const { history } = state;

            return {
                ...state,
                stepNumber: step,
                xIsNext: step % 2 === 0,
                winner: calculateWinner(history[step].squares)
            };
        }

        default:
            return { ...state };

    }
};
