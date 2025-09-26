import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class GreetService {
    public greet(name: string): string {
        if (name == '')
            return "Hello Guest";
        else
            return "Hello " + name;
    }
}