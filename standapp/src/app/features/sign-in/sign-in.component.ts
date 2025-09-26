import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  login: string = '';
  password: string = '';
  msg: string = '';

  constructor(private ls: LoginService, private router: Router) {

  }
  ngOnInit(): void {
    if (sessionStorage.getItem('user') != null) {
      if (prompt('Already logged in..logout ? y/n') == 'y')
        sessionStorage.removeItem('user');
      else
        this.router.navigate(['']);
    }
  }
  public doSignIn(): void {
    if (this.ls.check(this.login, this.password)) {
      sessionStorage.setItem('user', this.login);
      this.router.navigate(['']);
    }
    else
      this.msg = 'Invalid login/password';
  }
}

