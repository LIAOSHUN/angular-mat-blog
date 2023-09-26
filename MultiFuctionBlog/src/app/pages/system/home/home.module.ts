import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AllCommonModule } from 'src/app/shared/modules/all-common/all-common.module';
import { MaterialSharedModule } from 'src/app/shared-material/materialSharedModule';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AllCommonModule,
    MaterialSharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
