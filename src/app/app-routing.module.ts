import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  // {path:'',component:MasterComponent},
  {path:'cart',component:CartComponent},
  {path:'login',canActivate:[AuthGuard] ,component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'',component:ProductComponent},
  {path:'product',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
