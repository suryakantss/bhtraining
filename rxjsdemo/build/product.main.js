"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
let ps = new product_service_1.ProductService();
//console.log(ps.search());
ps.searchAsync().subscribe({
    next: (res) => {
        console.log(res);
    },
    error: (err) => {
        console.log(err);
    },
    complete: () => {
        console.log('unsubscribing....');
        //sub.unsubscribe();
    }
});
