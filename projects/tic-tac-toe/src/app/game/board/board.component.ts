import {
  Component, OnInit, Inject,
  Input, Output, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

import { BOARD_TOKEN } from './config/board.token';
import { board } from './config/board.data';
import { Coin } from '../model/game.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [
    {
      provide: BOARD_TOKEN,
      useValue: board
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {

  @Input() squares: Array<Coin>;
  @Input() xIsNext: boolean;
  @Input() stopPlay: boolean;
  @Output() coinPlacement: EventEmitter<number> = new EventEmitter<number>();
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();

  winner: Coin;

  constructor(
    @Inject(BOARD_TOKEN) public rows: Array<Array<number>>
  ) {
    // this.defaultBoardSetup();
  }

  ngOnInit() { }

}
