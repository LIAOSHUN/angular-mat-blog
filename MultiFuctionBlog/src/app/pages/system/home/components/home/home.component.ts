import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  inputValue: string = '艾蓮公仔';
  productArray: string[] = [];
  displayFlag: boolean = true;
  colorStatus: string = '';

  addProduct() {
    this.productArray.push(this.inputValue);
  }

  clear() {
    this.productArray.length = 0;
  }

  displayOrDisappear() {
    this.displayFlag = !this.displayFlag;
  }

  getColor(index: number) {
    return this.colorStatus = (index + 1) % 2 === 0 ? '#9999FF' : '';
  }


}
