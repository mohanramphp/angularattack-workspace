import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './board/square/square.component';


@NgModule({
  declarations: [GameComponent, BoardComponent, SquareComponent],
  imports: [
    SharedModule,
    GameRoutingModule
  ]
})
export class GameModule { }
