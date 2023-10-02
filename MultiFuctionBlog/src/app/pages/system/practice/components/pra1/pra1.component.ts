import { Component } from '@angular/core';

@Component({
  selector: 'app-pra1',
  templateUrl: './pra1.component.html',
  styleUrls: ['./pra1.component.scss']
})
export class Pra1Component {

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
