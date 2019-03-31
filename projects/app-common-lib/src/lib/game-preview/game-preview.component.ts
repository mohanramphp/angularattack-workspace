import {
  Component, OnInit,
  Input, Output, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'lib-game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamePreviewComponent implements OnInit {

  @Input() currentPreview: number;
  @Input() history: Array<any>;
  @Output() handlePreview: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
