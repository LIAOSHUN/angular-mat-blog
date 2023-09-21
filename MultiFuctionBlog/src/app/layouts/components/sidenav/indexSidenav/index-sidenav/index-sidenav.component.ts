import { Component } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-index-sidenav',
  templateUrl: './index-sidenav.component.html',
  styleUrls: ['./index-sidenav.component.scss']
})
export class IndexSidenavComponent {
  constructor() { }

  toggleSideNav(sideNav: MatSidenav) {
    sideNav.toggle().then((result: MatDrawerToggleResult) => {
      console.log(result);
      // console.log(`選單狀態：${result.type}`);
    });
  }


}
