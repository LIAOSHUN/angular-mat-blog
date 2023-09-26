import { Component } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  sideNavDisplayFlag: boolean = true;

  toggleSideNavContainer(flag: boolean) {
    this.sideNavDisplayFlag = flag;
  }

}
