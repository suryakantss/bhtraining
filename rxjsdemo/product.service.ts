import { Observable } from "rxjs";
import { Product } from "./product";

export class ProductService {
    public products: Array<Product> = [
        { id: 'P1', name: 'Mouse', price: 1200 },
        { id: 'P2', name: 'Keyboard', price: 700 }

    ];
    public search(): Array<Product> {
        return this.products;
    }

    public searchAsync(): Observable<Array<Product>> {
        let ob: Observable<Array<Product>> =
            new Observable((ob) => {
                ob.next(this.products);
                ob.complete();
            });
        return ob;
    }
}