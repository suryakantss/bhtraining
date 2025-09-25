"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const rxjs_1 = require("rxjs");
class ProductService {
    constructor() {
        this.products = [
            { id: 'P1', name: 'Mouse', price: 1200 },
            { id: 'P2', name: 'Keyboard', price: 700 }
        ];
    }
    search() {
        return this.products;
    }
    searchAsync() {
        let ob = new rxjs_1.Observable((ob) => {
            ob.next(this.products);
            ob.complete();
        });
        return ob;
    }
}
exports.ProductService = ProductService;
