import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   baseUrl:string="https://route-ecommerce.onrender.com"
   UserId:string=""
   numOfCartItems:BehaviorSubject<number>=new BehaviorSubject(0)
  constructor(private _HttpClient:HttpClient, private _Router:Router){
    if (localStorage.getItem('token')!=null){
      this.GetCartProducts().subscribe((res:any)=>{
        console.log(res);
        this.numOfCartItems.next(res.numOfCartItems)
        this.UserId=res.data.cartOwner
        console.log(this.UserId)
       }) 
    }
   }

  getAllProducts():Observable<any>{
return this._HttpClient.get(this.baseUrl+"/api/v1/products")
  }
  getSpecificProduct(productId:any):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`/api/v1/products/${productId}`)
  }
  getAllCategories():Observable<any>{
    return this._HttpClient.get(this.baseUrl+"/api/v1/categories")
      }
  AddProductToCart(productId:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl+"/api/v1/cart" ,
    {
      "productId":productId
    },
    {
      headers:
      {
        "token":localStorage.getItem("token")!
      }
    })
  }
  GetCartProducts(){
    return this._HttpClient.get(this.baseUrl+"/api/v1/cart",
    {
      headers:
      {
        "token":localStorage.getItem("token")!
      }
    })
  }
  updateProductCount(productId:string,count:number):Observable<any>{
    return this._HttpClient.put(this.baseUrl+`/api/v1/cart/${productId}`,
    {
      'count':count
    },
    {
      headers:
      {
        'token':localStorage.getItem('token')!
      }
    })

  }
  RemoveCartItem(productId:string):Observable<any>{
    return this._HttpClient.delete(this.baseUrl+`/api/v1/cart/${productId}`,

    {
      headers:
      {
        'token':localStorage.getItem('token')!
      }
    }) 

  }
  ClearCart():Observable<any>{
    return this._HttpClient.delete(this.baseUrl+"/api/v1/cart",
    {
      headers:
      {
        "token":localStorage.getItem("token")!
      }
    })
  }
  Checkout(shippingAddress:any,cartId:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl+`/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {
      "shippingAddress":shippingAddress
    },
    {
      headers:{
        token:localStorage.getItem('token')||""
      }
    })
  }
  getAllUserOrders(UserId:any):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`/api/v1/orders/user/${UserId}`)
      }
}



