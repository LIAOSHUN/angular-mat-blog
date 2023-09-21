import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [],
  providers: [],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class materialSharedModule { }
