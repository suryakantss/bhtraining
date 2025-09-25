import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  standalone: false,
  templateUrl: './greet.component.html',
  styleUrl: './greet.component.css'
})
export class GreetComponent {
  logo:string='logo.png';
  msgs: Array<string> = [
    "Happy Learning!!",
    "Happy Learning!!",
    "Say Hello!! to Angular!!"
  ]
}
