import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    public inc(n: number): number {
        console.log('inc...');
        return n + 1;
    }
    public dec(n: number): number {
        return n - 1;
    }

}