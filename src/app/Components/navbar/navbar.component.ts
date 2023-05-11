import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
numOfCartItems:number=0; 
constructor( public _AuthService:AuthService, private _ProductsService:ProductsService){
  _ProductsService.numOfCartItems.subscribe({
    next:(value)=>{
      this.numOfCartItems=value
    }
  })
}

}
