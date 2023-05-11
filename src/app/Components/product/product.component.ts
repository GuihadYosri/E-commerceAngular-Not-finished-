import { Component,Input } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 @Input() product:any;

 constructor(private _ProductsService:ProductsService){

 }
 AddProductToCart(productId:string)
 {
  this._ProductsService.AddProductToCart(productId).subscribe((response)=>{
     console.log(response);
     this._ProductsService.numOfCartItems.next(response.numOfCartItems)
  })
}
}
