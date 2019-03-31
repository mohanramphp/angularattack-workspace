import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './board/square/square.component';
import { gameReducers } from './store/reducers/game.reducers';

@NgModule({
  declarations: [
    GameComponent,
    BoardComponent,
    SquareComponent
  ],
  imports: [
    SharedModule,
    GameRoutingModule,
    StoreModule.forFeature('gameFeature', { game: gameReducers })
  ]
})
export class GameModule { }
