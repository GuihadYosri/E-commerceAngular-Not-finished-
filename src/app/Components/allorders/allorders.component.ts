import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent {

  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService){}
  getAllUserOrders(UserId:any){
     this._ProductsService.getAllUserOrders(UserId).subscribe((res)=>{
      console.log(res);
      
     })
      }

}
