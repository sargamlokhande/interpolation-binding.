import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StringBindingComponent } from './string-binding/string-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent, pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'string-binding', component:StringBindingComponent
  },
  {
    path:'event-binding', component:EventBindingComponent
  },
  {
    path:'two-way-binding', component:TwoWayBindingComponent
  },
  {
    path:'property-binding', component:PropertyBindingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
