import { Coin, Game } from '../../model/game.model';
import { GameState } from '../state/game.state';

export const calculateWinner = (squares): Coin => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let winner = null;
    lines.forEach((_, i) => {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            winner = squares[a];
        }
    });
    return winner;
};

export const handleCoinPlacement = (gameState: GameState, index: number): GameState => {
    let { history, stepNumber, winner, xIsNext } = gameState;
    history = history.slice(0, stepNumber + 1);

    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (winner || squares[index]) {
        return { ...gameState };
    }
    squares[index] = xIsNext ? 'X' : 'O';
    stepNumber = history.length;
    history = history.concat({ squares });
    xIsNext = !xIsNext;
    winner = calculateWinner(squares);

    return {
        history, xIsNext, stepNumber, winner
    };
};
