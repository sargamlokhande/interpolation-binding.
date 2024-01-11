import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  data = 12;
  data1: any;
  data2: any;
  data3: any;
  disable = true;

  inc() {
    this.data = this.data - 1;
    console.log(this.data);
  }

  dec() {
    this.data = this.data + 1;
    console.log(this.data);
  }

  enable() {
    this.disable = false;
  }
}
