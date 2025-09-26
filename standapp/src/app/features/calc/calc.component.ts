import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';
import { AddService } from './add.service';

@Component({
  selector: 'app-calc',
  imports: [FormsModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {

  n1: WritableSignal<string> = signal('');
  n2: WritableSignal<string> = signal('');
  sum: Signal<number> = computed(()=> this.ads.add(parseInt(this.n1()), parseInt(this.n2())));

  constructor(private ads:AddService){
  }
  
}
