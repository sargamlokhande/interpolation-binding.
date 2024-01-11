import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  x = "Total Products Avail Now";
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
}
