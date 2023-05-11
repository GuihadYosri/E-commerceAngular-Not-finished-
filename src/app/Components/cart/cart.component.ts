import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = []
  clickSetTimeOut: any;
  cartId:string=""

  constructor(private _ProdcutsService: ProductsService) {

  }


  ngOnInit(): void {
    this._ProdcutsService.GetCartProducts().subscribe({
      next: (value: any) => {
        console.log(value);
        this.cartProducts = value.data.products;
        this.cartId=value.data._id;
      

      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {

      },


    })
  }
  updateProductCount(productId: string, count: number) {
    clearTimeout(this.clickSetTimeOut)
    this.clickSetTimeOut = setTimeout(() => {
      if (count == 0) {
        this._ProdcutsService.RemoveCartItem(productId).subscribe((response) => {
          console.log(response);
          this.cartProducts = response.data.products;
        })
      }
      else {
        this._ProdcutsService.updateProductCount(productId, count).subscribe((response) => {
          console.log(response);
          this.cartProducts = response.data.products;
        })
      }


    }, 500)
  }

  RemoveCartItem(productId: string) {
    this._ProdcutsService.RemoveCartItem(productId).subscribe((response) => {
      console.log(response);
      this.cartProducts = response.data.products;
      this._ProdcutsService.numOfCartItems.next(response.numOfCartItems)
    })
  

  }
  ClearCart() {
    this._ProdcutsService.ClearCart().subscribe((response) => {
      console.log(response);
       if(response.message="success")
       {
        this._ProdcutsService.numOfCartItems.next(0)
       }
    })
  }
}