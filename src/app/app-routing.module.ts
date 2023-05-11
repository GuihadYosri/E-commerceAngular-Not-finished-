import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CartComponent } from './Components/cart/cart.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { ProductsComponent } from './Components/products/products.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AuthGuard } from './Guards/auth.guard';
import { CheckoutFormComponent } from './Components/checkout-form/checkout-form.component';
import { AllordersComponent } from './Components/allorders/allorders.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard],component:HomeComponent},
  {path:'product/:id',  canActivate:[AuthGuard],component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',  canActivate:[AuthGuard],component:CartComponent},
  {path:'categories',  canActivate:[AuthGuard],component:CategoriesComponent},
  {path:'products',  canActivate:[AuthGuard],component:ProductsComponent},
  {path:'allorders',  canActivate:[AuthGuard],component:AllordersComponent},
  {path:'brands',  canActivate:[AuthGuard],component:BrandsComponent},
  {path:'checkout/:cartId',  canActivate:[AuthGuard],component:CheckoutFormComponent},
  {path:'settings',loadChildren:()=>import('./settings/settings.module').then((m)=>m.SettingsModule)},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
