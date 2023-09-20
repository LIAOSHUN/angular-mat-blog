import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShoppingCenterComponent } from './components/shopping-center/shopping-center.component';


@NgModule({
  declarations: [
    ShoppingCenterComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
