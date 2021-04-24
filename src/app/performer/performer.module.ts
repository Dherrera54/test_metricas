import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformerComponent } from './performer.component';
import { PerformerListComponent } from './performer-list/performer-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PerformerComponent,
                 PerformerListComponent],
  exports: [PerformerComponent,
            PerformerListComponent]
})
export class PerformerModule { }
