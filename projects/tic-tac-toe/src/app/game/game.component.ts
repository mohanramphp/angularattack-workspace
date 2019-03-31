import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { Coin, Game } from './model/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  history: Array<Game> = [];
  current$: BehaviorSubject<Game> =
    new BehaviorSubject<Game>({
      squares: Array(9).fill(null)
    });
  xIsNext: boolean;
  winner: Coin;
  stepNumber: number;

  constructor() {
    // updating the history
    this.handleReset();
    this.current$.pipe(
      untilDestroyed(this)
    ).subscribe(current => this.history = [...this.history, current]);
  }

  ngOnInit() {
  }

  handleCoinPlacement(i: number) {
    this.history = this.history.slice(0, this.stepNumber + 1);
    const history = this.history.slice();

    const current = this.history[history.length - 1];
    const squares = current.squares.slice();
    if (this.winner || squares[i]) {
      return;
    }
    squares[i] = this.xIsNext ? 'X' : 'O';
    this.current$.next({ squares });
    this.xIsNext = !this.xIsNext;
    this.winner = this.calculateWinner(squares);
    this.stepNumber = history.length;
  }

  handleReset() {
    this.history = [];
    this.winner = null;
    this.stepNumber = 0;
    this.xIsNext = true;
    const squares = Array(9).fill(null);
    this.current$.next({ squares });
  }

  jumpTo(step: number) {
    this.stepNumber = step;
    this.xIsNext = (this.stepNumber % 2) === 0;
    const { squares } = this.history[step];
    this.winner = this.calculateWinner(squares);
    // const current = this.history[step];
    // this.history = this.history.slice(0, step - 1);
    // this.current$.next(current);
  }

  calculateWinner(squares): Coin {
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
  }

  ngOnDestroy() { }

}
