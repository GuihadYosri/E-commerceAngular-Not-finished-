import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CartComponent } from './Components/cart/cart.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './Components/product/product.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './Pipes/search.pipe';
import { CheckoutFormComponent } from './Components/checkout-form/checkout-form.component';
import { AllordersComponent } from './Components/allorders/allorders.component';
// import { ResetPasswordComponent } from './setings/Components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    ProductDetailsComponent,
    ProductsComponent,
    RegisterComponent,
    ProductComponent,
    CartComponent,
    SearchPipe,
    CheckoutFormComponent,
    AllordersComponent,
    // ResetPasswordComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
