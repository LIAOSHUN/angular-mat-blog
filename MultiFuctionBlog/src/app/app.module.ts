import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialSharedModule } from './shared-material/materialSharedModule';
import { BaseInfoTopbarComponent } from './layouts/components/topbar/base-info-topbar/base-info-topbar.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ContainerComponent } from './layouts/components/container/container.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { AllCommonModule } from './shared/modules/all-common/all-common.module';

@NgModule({
  declarations: [
    AppComponent,
    BaseInfoTopbarComponent,
    BaseLayoutComponent,
    ContainerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialSharedModule,
    AllCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
