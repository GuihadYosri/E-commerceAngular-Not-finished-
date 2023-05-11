import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId:string="";
  productDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductsService:ProductsService){}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      
    },
    nav: true
  }
 ngOnInit(){
  this._ActivatedRoute.paramMap.subscribe((params)=>{
    this.productId=params.get('id')||""
    this._ProductsService.getSpecificProduct(this.productId).subscribe((product)=>{
      console.log(product.data);
      this.productDetails=product.data

    })
  })
 }
   


   AddProductToCart(productId:string)
 {
  this._ProductsService.AddProductToCart(productId).subscribe((response)=>{
     console.log(response);
     this._ProductsService.numOfCartItems.next(response.numOfCartItems)
  })
}

  }