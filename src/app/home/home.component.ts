import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  para="Fujitsu UH-X 12th Gen Intel Evo Core i7 13.3 inch(33cm) FHD IGZO Display 400Nits Thin & Light Laptop(16GB/1TB SSD/Windows11/MS Office 21/Iris Xe Graphics/Backlit KB/Black/997gms) 4ZR1J37878";
  x="Total Products Avail Now";
  data=12;
  data1:any;
  data2:any;
  data3:any;
  disable=true;

  inc(){
    this.data=this.data-1;
    console.log(this.data);
  }

  dec(){
    this.data=this.data+1;
    console.log(this.data);
  }

  submit(){
    alert("Your Form is Submitted")
  }

  enable(){
    this.disable=false;
  }

}
