import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pra1Component } from './components/pra1/pra1.component';

const routes: Routes = [
  {
    path: 'pra1',
    component: Pra1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
