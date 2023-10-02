import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/system/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('./pages/system/shop/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'practice',
        loadChildren: () => import('./pages/system/practice/practice.module').then(m => m.PracticeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
