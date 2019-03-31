import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePreviewComponent } from './game-preview/game-preview.component';

@NgModule({
  declarations: [GamePreviewComponent],
  imports: [
    CommonModule
  ],
  exports: [GamePreviewComponent]
})
export class AppCommonLibModule { }
