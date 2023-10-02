import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShoppingCenterComponent } from './components/shopping-center/shopping-center.component';
import { PrimengSharedModuleModule } from 'src/app/shared-primeng/primeng-shared-module.module';
import { MaterialSharedModule } from 'src/app/shared-material/materialSharedModule';
import { AllCommonModule } from 'src/app/shared/modules/all-common/all-common.module';


@NgModule({
  declarations: [
    ShoppingCenterComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    PrimengSharedModuleModule,
    AllCommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
