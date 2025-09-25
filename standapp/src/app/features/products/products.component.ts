import { Component, inject, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];
   private ps:ProductService = inject(ProductService); 
  //constructor injection
  constructor(){

  }
  public load(){
       this.ps.getProducts().subscribe(res =>{
        this.products = res;
      });
  }
  ngOnInit(): void {
      this.load();
  }

  public addProduct(id:HTMLInputElement,name:HTMLInputElement,price:HTMLInputElement)
  {
        let newproduct:Product = {id:id.value,name:name.value,price:parseInt(price.value)};
        this.ps.addproduct(newproduct);
        this.load();
        id.value='';
        name.value='';
        price.value='';
  }
}
