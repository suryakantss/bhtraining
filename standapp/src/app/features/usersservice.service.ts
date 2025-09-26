import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {
  constructor(private http:HttpClient) {
   }
  public getUsers():Observable<Array<User>>{
    let url:string = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<Array<User>>(url);

  }
}
