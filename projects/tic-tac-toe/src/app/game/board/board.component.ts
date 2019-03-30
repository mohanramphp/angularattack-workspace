import {
  Component, OnInit, Inject,
  Input, Output, EventEmitter
} from '@angular/core';
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

  @Input() squares: Array<'X' | 'O' | null>;
  @Input() xIsNext: boolean;
  @Input() stopPlay: boolean;
  @Output() coinPlacement: EventEmitter<number> = new EventEmitter<number>();
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();

  winner: 'X' | 'O' | null;

  constructor(
    @Inject(BOARD_TOKEN) public rows: Array<Array<number>>
  ) {
    // this.defaultBoardSetup();
  }

  ngOnInit() {

  }

}
