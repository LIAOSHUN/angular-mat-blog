import { MaterialSharedModule } from 'src/app/shared-material/materialSharedModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { Pra1Component } from './components/pra1/pra1.component';
import { AllCommonModule } from 'src/app/shared/modules/all-common/all-common.module';
import { PrimengSharedModuleModule } from 'src/app/shared-primeng/primeng-shared-module.module';


@NgModule({
  declarations: [
    Pra1Component
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    PrimengSharedModuleModule,
    AllCommonModule,
    PracticeRoutingModule
  ]
})
export class PracticeModule { }
