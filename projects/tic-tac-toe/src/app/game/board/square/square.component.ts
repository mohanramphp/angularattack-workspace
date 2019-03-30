import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() value: number;
  @Input() disabled: boolean;
  @Output() squareSelection: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
