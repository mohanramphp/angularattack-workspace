import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState } from './store/state/game.state';
import {
  selectHistory, selectSquares,
  selectStatus, selectStopPlay, selectStepNumber
} from './store/selectors/game.selectors';
import { Reset, JumpTo, HandleCoinPlacement } from './store/actions/game.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {

  history$ = this.store.pipe(select(selectHistory));
  squares$ = this.store.pipe(select(selectSquares));
  status$ = this.store.pipe(select(selectStatus));
  stopPlay$ = this.store.pipe(select(selectStopPlay));
  stepNumber$ = this.store.pipe(select(selectStepNumber));

  constructor(
    private store: Store<{ game: GameState }>
  ) { }

  handleReset() {
    this.store.dispatch(new Reset());
  }

  jumpTo(index: number) {
    this.store.dispatch(new JumpTo({ index }));
  }

  handleCoinMovement(index: number) {
    this.store.dispatch(new HandleCoinPlacement({ index }));
  }
}
