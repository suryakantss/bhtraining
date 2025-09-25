import { Observable } from "rxjs";
export function add(a: number, b: number): Observable<number> {
    let ob: Observable<number> = new Observable((o) => {
        o.next(a + b);
        o.next(a + b);
        
        o.complete();
    });
    return ob;
}
