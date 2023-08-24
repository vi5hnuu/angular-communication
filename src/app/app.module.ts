import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RatingStarComponent} from "./shared/rating-star/rating-star.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ProductAddComponent} from "./products/product-add/product-add.component";
import {ProductListComponent} from "./products/product-list/product-list.component";
import { ProductFormComponent } from './products/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductAddComponent,
    HomeComponent,
    LoginComponent,
    WelcomeComponent,
    RatingStarComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
