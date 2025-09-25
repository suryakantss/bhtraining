import { filter } from "rxjs";
import { ProductService } from "./product.service";


let ps:ProductService =  new ProductService();
//console.log(ps.search());

ps.searchAsync().subscribe({
    next:(res)=>{
        console.log(res);
    },
    error:(err)=>{
        console.log(err);
    },
    complete:()=>{
        console.log('unsubscribing....')
        //sub.unsubscribe();
    }
})
console.log("===============");

