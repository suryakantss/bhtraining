import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from "../highlight.directive";
import { CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { HelloPipe } from '../../hello.pipe';

@Component({
  selector: 'app-home',
  imports: [UpperCasePipe,LowerCasePipe,CurrencyPipe,DatePipe,HelloPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  user:string | null='';
  dob:Date = new Date();
ngOnInit(): void {
    this.user=sessionStorage.getItem('user');

}
}
