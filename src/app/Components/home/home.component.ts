import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products:any[]=[]
  searchTerm:string=""
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
      }
    },
    nav: true
  }
  constructor(private _Router:Router, private _ProductsService:ProductsService){
     if (localStorage.getItem('token')==null)
     {
      _Router.navigate(['/login'])
     }
     _ProductsService.getAllProducts().subscribe((products)=>{
      this.products=products.data
     })
  }
}
