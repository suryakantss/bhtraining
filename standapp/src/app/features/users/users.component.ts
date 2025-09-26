import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersserviceService } from '../usersservice.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  data:Array<User> =[];
  constructor(private us:UsersserviceService){
  }
  ngOnInit(): void {
      this.us.getUsers().subscribe(res=>{
        this.data=res;
      })
  }


}
