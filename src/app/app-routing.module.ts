import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ProductFormComponent} from "./products/product-form/product-form.component";

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'home/welcome',component: WelcomeComponent,outlet:'home-outlet'},
  {path:'home/products',component: ProductListComponent,outlet:'home-outlet'},
  {path:'products/:id',component: ProductDetailComponent},
  {path:'edit-product',component: ProductFormComponent},
  {path:'add-product',component: ProductFormComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
