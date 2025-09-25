import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  id:string='';
  constructor(private ac:ActivatedRoute){
      ac.params.subscribe(p=>{
       this.id = p['id'];
      });
  }

}
