import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { materialSharedModule } from './shared-material/materialSharedModule';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexSidenavComponent } from './layouts/components/sidenav/indexSidenav/index-sidenav/index-sidenav.component';
import { BaseInfoTopbarComponent } from './layouts/components/topbar/base-info-topbar/base-info-topbar.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout/base-layout.component';
import { ContainerComponent } from './layouts/components/container/container/container.component';
import { FooterComponent } from './layouts/components/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexSidenavComponent,
    BaseInfoTopbarComponent,
    BaseLayoutComponent,
    ContainerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    materialSharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
