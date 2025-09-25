import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetComponent } from './greet/greet.component';



@NgModule({
  declarations: [
    GreetComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GreetComponent
  ]
})
export class TrainingModule { }
