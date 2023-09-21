import { Component } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  sideNavDisplayFlag: boolean = false;

  toggleSideNavContainer(flag: boolean) {
    console.log(flag)
    this.sideNavDisplayFlag = flag;

  }

}
