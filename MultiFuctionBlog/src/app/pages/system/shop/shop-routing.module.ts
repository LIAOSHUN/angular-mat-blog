import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCenterComponent } from './components/shopping-center/shopping-center.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCenterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
