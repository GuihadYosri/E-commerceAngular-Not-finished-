import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories:any[]=[]
 constructor(private _HttpClient:HttpClient,private _ProductsService:ProductsService)
 {
  _ProductsService.getAllCategories().subscribe((categories)=>{
    console.log(categories.data)
    this.categories=categories.data
  })
 }
}
