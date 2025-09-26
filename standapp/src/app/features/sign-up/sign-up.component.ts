import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  frm: FormGroup = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
  });

  public doSignUp():void {
    alert('Thank You ' + this.frm.get('fname')?.value);
  }
}
