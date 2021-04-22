import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';

const routes: any = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
