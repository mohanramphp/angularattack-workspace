import { Component, OnInit, Inject } from '@angular/core';
import { BOARD_TOKEN } from './config/board.token';
import { board } from './config/board.data';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [
    {
      provide: BOARD_TOKEN,
      useValue: board
    }
  ]
})
export class BoardComponent implements OnInit {

  squares: Array<'X' | 'O' | null> = [];
  xIsNext: boolean;
  winner: 'X' | 'O' | null;

  constructor(
    @Inject(BOARD_TOKEN) public rows: Array<Array<number>>
  ) {
    this.defaultBoardSetup();
  }

  ngOnInit() {

  }

  handleSquareSelection(i: number) {
    const squares = this.squares.slice();
    squares[i] = this.xIsNext ? 'X' : 'O';
    this.squares = squares;
    this.xIsNext = !this.xIsNext;
    this.winner = this.calculateWinner(this.squares);
    console.log('this.winner');
    console.log(this.winner);
  }

  reset() {
    this.defaultBoardSetup();
  }

  defaultBoardSetup() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  calculateWinner(squares): null | 'X' | 'O' {
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
      console.log('squares[a], squares[b], squares[c]');
      console.log(squares[a], squares[b], squares[c]);
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log('result = ' + squares[a]);
        winner = squares[a];
      }
    });
    return winner;
  }

}
