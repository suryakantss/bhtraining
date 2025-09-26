import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  constructor(private cs: CounterService) {
  }
  count: number = 0;
  public inc(): void {
    this.count = this.cs.inc(this.count);
  }
  public dec(): void {
    this.count = this.cs.dec(this.count);
  }

}
