import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent {
  data: any;
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

  submit() {
    alert("Your Form is Submitted")
  }
}
