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

  constructor(
    @Inject(BOARD_TOKEN) public rows: Array<Array<number>>
  ) { }

  ngOnInit() {

  }

}
