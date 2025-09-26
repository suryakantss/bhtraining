import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public check(login: string, password: string) {
    if (login == 'John' && password == 'carter')
      return true;
    else
      return false;
  }

}
