import { Component } from '@angular/core';

@Component({
  selector: 'app-colorchange',
  templateUrl: './colorchange.component.html',
  styleUrls: ['./colorchange.component.css']
})
export class ColorchangeComponent {

  redColor() {
    debugger;
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(c);
    document.body.style.backgroundColor = 'red';
  }
  blackColor() {
    document.body.style.backgroundColor = 'black';

  }

  blueColor() {
    document.body.style.backgroundColor = 'blue';

  }


}
