import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformerListComponent } from './performer-list/performer-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PerformerListComponent],
  exports: [PerformerListComponent]
})
export class PerformerModule { }
