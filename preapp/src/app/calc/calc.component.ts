import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  imports: [FormsModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  n1:WritableSignal<string> = signal('');
  n2:WritableSignal<string> = signal('');
  sum:Signal<number> = computed(()=>{
    return parseInt(this.n1())+ parseInt(this.n2()); 
  });

  public check(n:number):number{
      if(isNaN(n))
        return 0;
      else
        return n;
  }
}
