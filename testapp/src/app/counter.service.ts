import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  public inc(n:number):number{
    console.log('inc called...')
    return n+1;
  }
  
  public dec(n:number):number{
     console.log('dec called...')
    return n-1;
  }
}
