import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { MasterComponent } from './master/master.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductviewComponent } from './productview/productview.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SliderComponent } from './slider/slider.component';
import { FilterPipe } from './filter.pipe';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './search.pipe';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    MasterComponent,
    DashboardComponent,
    FooterComponent,
    ProductviewComponent,
    SliderComponent,
    FilterPipe,
    SearchPipe,
    SignupComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
     FlexLayoutModule,
     MatGridListModule,
     MatTabsModule,
     FontAwesomeModule,
MatDialogModule,
Ng2SearchPipeModule,
MatBadgeModule,
MatFormFieldModule


  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
