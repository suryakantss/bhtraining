import { Component } from '@angular/core';
import { HighlightDirective } from "../highlight.directive";
import { CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { HelloPipe } from '../../hello.pipe';

@Component({
  selector: 'app-home',
  imports: [HighlightDirective,UpperCasePipe,LowerCasePipe,CurrencyPipe,DatePipe,HelloPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dob:Date = new Date();
}
