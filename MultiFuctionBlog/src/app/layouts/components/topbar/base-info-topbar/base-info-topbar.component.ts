import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-base-info-topbar',
  templateUrl: './base-info-topbar.component.html',
  styleUrls: ['./base-info-topbar.component.scss']
})
export class BaseInfoTopbarComponent {

  @Output() toggleSideNavEmit = new EventEmitter<boolean>;
  sideNavDisplayFlag: boolean = true;

  toggleSideNavTopbar() {
    this.sideNavDisplayFlag = !this.sideNavDisplayFlag;
    this.toggleSideNavEmit.emit(this.sideNavDisplayFlag);
  }

}
