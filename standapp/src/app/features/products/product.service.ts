import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ProductService {
    private products:Array<Product>  = [
    {id:'P1',name:'Memory Card',price:1200},
    {id:'P2',name:'Notebook',price:600},
  ];
    public getProducts():Observable<Array<Product>>{
        let ob:Observable<Array<Product>> = new Observable((o)=>{
            o.next(this.products);
        });
        return ob;
    }

    public addproduct(p:Product): Product{
            this.products.push(p);
            return p;
    }
}