import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonLibModule } from '@app/common-lib';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    AppCommonLibModule
  ]
})
export class SharedModule { }
